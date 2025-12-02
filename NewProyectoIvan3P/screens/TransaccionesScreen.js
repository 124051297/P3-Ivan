import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Alert, SafeAreaView, StatusBar, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import DatabaseService from '../database/DatabaseService';

export default function TransaccionesScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { userId } = route.params || {};
  const [currentScreen, setCurrentScreen] = useState('list');
  const [transactions, setTransactions] = useState([]);
  
  const initialFormState = {
    id: null,
    amount: '',
    type: 'gasto',
    category: '',
    date: new Date().toISOString().split('T')[0],
    description: ''
  };
  
  const [formData, setFormData] = useState(initialFormState);
  useFocusEffect(
    useCallback(() => {
      cargarTransacciones();
    }, [userId])
  );

  const cargarTransacciones = async () => {
    if (userId) {
      const datos = await DatabaseService.obtenerTransacciones(userId);
      setTransactions(datos);
    }
  };

  const handleAddNew = () => {
    setFormData(initialFormState);
    setCurrentScreen('form');
  };

  const handleEdit = (item) => {
    setFormData({ ...item, amount: item.amount.toString() });
    setCurrentScreen('form');
  };

  const handleSave = async () => {
    if (!formData.amount || !formData.category) {
      Alert.alert("Error", "Por favor ingresa un monto y una categoría");
      return;
    }

    const amountFloat = parseFloat(formData.amount);
    const transaccionData = { ...formData, amount: amountFloat };

    try {
      if (formData.id) {
        await DatabaseService.actualizarTransaccion(transaccionData);
      } else {
        await DatabaseService.agregarTransaccion(userId, transaccionData);
      }
      
      await cargarTransacciones();
      setCurrentScreen('list');

    } catch (error) {
      console.error(error);
      Alert.alert("Error", "No se pudo guardar la transacción");
    }
  };

  const handleDelete = async (id) => {
    Alert.alert(
      "Eliminar", "¿Estás seguro de eliminar esta transacción?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Eliminar", 
          style: "destructive",
          onPress: async () => {
            await DatabaseService.eliminarTransaccion(id);
            await cargarTransacciones();
          }
        }
      ]
    );
  };

  const totalIncome = transactions.filter(t => t.type === 'ingreso').reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpense = transactions.filter(t => t.type === 'gasto').reduce((acc, curr) => acc + curr.amount, 0);
  const balance = totalIncome - totalExpense;

  const categories = {
    ingreso: ['Salario', 'Ventas', 'Reembolso', 'Inversión', 'Otro'],
    gasto: ['Comida', 'Transporte', 'Hogar', 'Entretenimiento', 'Salud', 'Otro']
  };

  const renderList = () => (
    <View style={styles.flex1}>
      <View style={styles.summaryHeader}>
        <View style={styles.headerTop}>
           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButtonHeader}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Mi Billetera</Text>
          <View style={{width: 24}} /> 
        </View>

        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Balance Total</Text>
          <Text style={styles.balanceAmount}>${balance.toFixed(2)}</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <View style={[styles.iconCircle, { backgroundColor: 'rgba(74, 222, 128, 0.2)' }]}>
              <Text style={{color: '#22c55e'}}>↓</Text>
            </View>
            <View>
              <Text style={styles.statLabel}>Ingresos</Text>
              <Text style={styles.statValue}>+${totalIncome.toFixed(2)}</Text>
            </View>
          </View>
          <View style={styles.statItem}>
            <View style={[styles.iconCircle, { backgroundColor: 'rgba(248, 113, 113, 0.2)' }]}>
              <Text style={{color: '#ef4444'}}>↑</Text>
            </View>
            <View>
              <Text style={styles.statLabel}>Gastos</Text>
              <Text style={styles.statValue}>-${totalExpense.toFixed(2)}</Text>
            </View>
          </View>
        </View>
      </View>

      <FlatList
        data={transactions}
        keyExtractor={t => t.id.toString()}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>📝</Text>
            <Text style={styles.emptyText}>No hay transacciones aún.</Text>
            <Text style={styles.emptySubtext}>Toca el botón + para agregar una.</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardLeft}>
              <View style={[
                styles.typeIcon, 
                item.type === 'ingreso' ? styles.bgGreen : styles.bgRed
              ]}>
                <Text>{item.type === 'ingreso' ? '💰' : '🛒'}</Text>
              </View>
              <View>
                <Text style={styles.cardCategory}>{item.category}</Text>
                <Text style={styles.cardDate}>{item.date}</Text>
                {item.description ? <Text style={styles.cardDesc}>{item.description}</Text> : null}
              </View>
            </View>
            
            <View style={styles.cardRight}>
              <Text style={[
                styles.amountText, 
                item.type === 'ingreso' ? styles.textGreen : styles.textRed
              ]}>
                {item.type === 'ingreso' ? '+' : '-'}${item.amount.toFixed(2)}
              </Text>
              
              <View style={styles.actionsRow}>
                <TouchableOpacity onPress={() => handleEdit(item)} style={styles.actionBtn}>
                  <Text style={styles.editText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.actionBtn}>
                  <Text style={styles.deleteText}>X</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

      <TouchableOpacity style={styles.fab} onPress={handleAddNew}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );

  const renderForm = () => (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.flex1}>
      <ScrollView contentContainerStyle={styles.formContainer}>
        <View style={styles.formHeader}>
          <TouchableOpacity onPress={() => setCurrentScreen('list')} style={styles.backButton}>
            <Text style={styles.backText}>← Volver</Text>
          </TouchableOpacity>
          <Text style={styles.formTitle}>
            {formData.id ? 'Editar Transacción' : 'Nueva Transacción'}
          </Text>
        </View>

        <View style={styles.typeSelector}>
          <TouchableOpacity style={[styles.typeOption, formData.type === 'gasto' && styles.typeSelectedRed]} onPress={() => setFormData({...formData, type: 'gasto', category: ''})}><Text style={[styles.typeText, formData.type === 'gasto' && styles.textRed]}>Gasto</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.typeOption, formData.type === 'ingreso' && styles.typeSelectedGreen]} onPress={() => setFormData({...formData, type: 'ingreso', category: ''})}><Text style={[styles.typeText, formData.type === 'ingreso' && styles.textGreen]}>Ingreso</Text></TouchableOpacity>
        </View>

        <Text style={styles.label}>MONTO</Text>
        <TextInput style={styles.inputAmount} value={formData.amount} onChangeText={(text) => setFormData({...formData, amount: text})} placeholder="0.00" keyboardType="numeric" placeholderTextColor="#ccc" />

        <Text style={styles.label}>CATEGORÍA</Text>
        <View style={styles.categoriesGrid}>
          {categories[formData.type].map(cat => (
            <TouchableOpacity key={cat} style={[styles.catChip, formData.category === cat && styles.catChipSelected]} onPress={() => setFormData({...formData, category: cat})}>
              <Text style={[styles.catText, formData.category === cat && styles.catTextSelected]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>FECHA (YYYY-MM-DD)</Text>
        <TextInput style={styles.input} value={formData.date} onChangeText={(text) => setFormData({...formData, date: text})} placeholder="2023-10-25" placeholderTextColor="#999" />

        <Text style={styles.label}>DESCRIPCIÓN</Text>
        <TextInput style={[styles.input, styles.textArea]} value={formData.description} onChangeText={(text) => setFormData({...formData, description: text})} placeholder="Detalles opcionales..." placeholderTextColor="#999" multiline />

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>{formData.id ? 'Actualizar' : 'Guardar'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#003087" />
      {currentScreen === 'list' ? renderList() : renderForm()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  flex1: { flex: 1 },
  summaryHeader: { 
    backgroundColor: '#003087',
    padding: 20, 
    borderBottomLeftRadius: 24, 
    borderBottomRightRadius: 24, 
    paddingTop: Platform.OS === 'android' ? 40 : 20 },
  headerTop: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 15 },
  headerTitle: { 
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold' },
  backArrow: { 
    color: 'white', 
    fontSize: 24 },
  balanceContainer: { 
    alignItems: 'center', 
    marginBottom: 20 },
  balanceLabel: { 
    color: '#bfdbfe', 
    fontSize: 14 },
  balanceAmount: { 
    color: 'white', 
    fontSize: 36, 
    fontWeight: 'bold' },
  statsRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 10 },
  statItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 10 },
  iconCircle: { 
    width: 36, 
    height: 36, 
    borderRadius: 18, 
    alignItems: 'center', 
    justifyContent: 'center' },
  statLabel: { 
    color: '#bfdbfe', 
    fontSize: 12 },
  statValue: { 
    color: 'white', 
    fontSize: 16, 
    fontWeight: '600' },
  listContent: { 
    padding: 16, 
    paddingBottom: 80 },
  emptyContainer: { 
    alignItems: 'center', 
    marginTop: 60 },
  emptyIcon: { 
    fontSize: 40, 
    marginBottom: 10 },
  emptyText: { 
    textAlign: 'center', 
    color: '#666', 
    fontSize: 16, 
    fontWeight: 'bold' },
  emptySubtext: { 
    textAlign: 'center', 
    color: '#999', 
    fontSize: 14, 
    marginTop: 4 },
  card: { 
    backgroundColor: 'white', 
    borderRadius: 16, 
    padding: 16, 
    marginBottom: 12, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    elevation: 2, 
    shadowColor: '#000', 
    shadowOpacity: 0.05, 
    shadowRadius: 5, shadowOffset: { width: 0, height: 2 } },
  cardLeft: { 
    flexDirection: 'row', 
    gap: 12, 
    alignItems: 'center', 
    flex: 1 },
  typeIcon: { 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    alignItems: 'center', 
    justifyContent: 'center' },
  bgGreen: { backgroundColor: '#dcfce7' },
  bgRed: { backgroundColor: '#fee2e2' },
  cardCategory: { 
    fontWeight: 'bold', 
    fontSize: 16, 
    color: '#333' },
  cardDate: { fontSize: 12, color: '#999' },
  cardDesc: { 
    fontSize: 12, 
    color: '#666', 
    fontStyle: 'italic', 
    maxWidth: 150 },
  cardRight: { alignItems: 'flex-end' },
  amountText: { fontWeight: 'bold', fontSize: 16 },
  textGreen: { color: '#16a34a' },
  textRed: { color: '#dc2626' },
  actionsRow: { 
    flexDirection: 'row', 
    gap: 10, 
    marginTop: 8 },
  editText: { color: '#2563eb', fontSize: 12 },
  deleteText: { color: '#dc2626', fontSize: 12 },
  fab: { 
    position: 'absolute', 
    bottom: 24, 
    right: 24, 
    width: 56, 
    height: 56, 
    borderRadius: 28, 
    backgroundColor: '#003087', 
    alignItems: 'center', 
    justifyContent: 'center',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOpacity: 0.3, shadowOffset: { width: 0, height: 3 } },
  fabText: { 
    color: 'white', 
    fontSize: 32, 
    marginTop: -4 },
  formContainer: { padding: 20 },
  formHeader: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 20 },
  backButton: { 
    padding: 8, 
    marginRight: 10 },
  backText: { 
    color: '#003087', 
    fontWeight: '600' },
  formTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#333' },
  typeSelector: { 
    flexDirection: 'row', 
    backgroundColor: '#e5e7eb', 
    borderRadius: 12,
    padding: 4, 
    marginBottom: 20 },
  typeOption: { 
    flex: 1,
     paddingVertical: 10, 
     alignItems: 'center', 
     borderRadius: 10 },
  typeSelectedRed: { 
    backgroundColor: 'white', 
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    shadowRadius: 2 },
  typeSelectedGreen: { 
    backgroundColor: 'white', 
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    shadowRadius: 2 },
  typeText: { 
    fontWeight: '600', 
    color: '#666' },
  label: { 
    fontSize: 12, 
    fontWeight: 'bold', 
    color: '#9ca3af', 
    marginBottom: 6, 
    marginTop: 10 },
  inputAmount: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#333', 
    borderBottomWidth: 1, 
    borderBottomColor: '#e5e7eb', 
    paddingVertical: 8, 
    marginBottom: 10 },
  input: { 
    backgroundColor: 'white', 
    borderWidth: 1, 
    borderColor: '#e5e7eb', 
    borderRadius: 12, 
    padding: 12, 
    fontSize: 16, 
    color: '#333' },
  textArea: { height: 80, textAlignVertical: 'top' },
  categoriesGrid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    gap: 8 },
  catChip: { 
    paddingHorizontal: 16, 
    paddingVertical: 8, 
    borderRadius: 20, 
    borderWidth: 1, 
    borderColor: '#e5e7eb', 
    backgroundColor: 'white' },
  catChipSelected: { 
    backgroundColor: '#eff6ff', 
    borderColor: '#2563eb' },
  catText: { 
    fontSize: 13, 
    color: '#666' },
  catTextSelected: { 
    color: '#2563eb', 
    fontWeight: '600' },
  saveButton: { 
    backgroundColor: '#003087', 
    borderRadius: 12, 
    padding: 16, 
    alignItems: 'center', 
    marginTop: 30 },
  saveButtonText: { 
    color: 'white', 
    fontSize: 16, 
    fontWeight: 'bold' }
});