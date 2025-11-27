import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import AutoScreen from './AutoScreen';
import RecuperacionScreen from './RecuperacionScreen';
import Auto2Screen from './Auto2Screen';
import CrudScreen from './CrudScreen';
import AgregarScreen from './AgregarScreen';
import ListaScreen from './ListaScreen';
import EditarScreen from './EditarScreen';
import EliminarScreen from './EliminarScreen';
import GraficaScreen from './GraficaScreen';
import PresupuestoScreen from './PresupuestoScreen';



export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'AutoScreen':
      return <AutoScreen />;
    case 'RecuperacionScreen':
      return <RecuperacionScreen />;
    case 'Auto2Screen':
      return <Auto2Screen />;
    case 'CrudScreen':
      return <CrudScreen />;
    case 'AgregarScreen':
      return <AgregarScreen />;
    case 'ListaScreen':
      return <ListaScreen />;
    case 'EditarScreen':
      return <EditarScreen />;
    case 'EliminarScreen':
      return <EliminarScreen />;
    case 'GraficaScreen':
      return <GraficaScreen />;
    case 'PresupuestoScreen':
      return <PresupuestoScreen />;
    case 'menu':
    default:
      return (
        <View style={styles.container}>

          <Text style={styles.title}>MI APP</Text>

          <ScrollView style={styles.menuList}>
            <Text style={styles.categoryTitle}>🔐 AUTENTICACIÓN</Text>
            <TouchableOpacity style={styles.menuButton} onPress={() => setScreen('AutoScreen')}>
              <Text style={styles.buttonText}>Inicio de Sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButton} onPress={() => setScreen('RecuperacionScreen')}>
              <Text style={styles.buttonText}>Recuperar Contraseña</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButton} onPress={() => setScreen('Auto2Screen')}>
              <Text style={styles.buttonText}>Validación Credenciales</Text>
            </TouchableOpacity>

            <Text style={styles.categoryTitle}>💳 GESTIÓN DE TRANSACCIONES</Text>
            
            <TouchableOpacity style={styles.menuButton} onPress={() => setScreen('CrudScreen')}>
              <Text style={styles.buttonText}>Menú Principal CRUD</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.subMenuButton} onPress={() => setScreen('AgregarScreen')}>
              <Text style={styles.subButtonText}>➕ Agregar Transacción</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.subMenuButton} onPress={() => setScreen('ListaScreen')}>
              <Text style={styles.subButtonText}>📋 Listar Transacciones</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.subMenuButton} onPress={() => setScreen('EditarScreen')}>
              <Text style={styles.subButtonText}>✏️ Editar Transacción</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.subMenuButton} onPress={() => setScreen('EliminarScreen')}>
              <Text style={styles.subButtonText}>🗑️ Eliminar Transacción</Text>
            </TouchableOpacity>

            <Text style={styles.categoryTitle}>📊 GRÁFICAS</Text>

            <TouchableOpacity style={styles.menuButton} onPress={() => setScreen('GraficaScreen')}>
              <Text style={styles.buttonText}>Gráficas y Reportes</Text>
            </TouchableOpacity>

            <Text style={styles.categoryTitle}>💰 PRESUPUESTOS</Text>

            <TouchableOpacity style={styles.menuButton} onPress={() => setScreen('PresupuestoScreen')}>
              <Text style={styles.buttonText}>Presupuestos Mensuales</Text>
            </TouchableOpacity>
          </ScrollView>


        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  title: {
    marginTop: 50,
    marginBottom: 30,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2a6db0',
    textAlign: 'center',
  },
  menuList: {
    width: '100%',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2a6db0',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
  },
  menuButton: {
    backgroundColor: '#2a6db0',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  subMenuButton: {
    backgroundColor: '#4BC7F3',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 8,
    marginLeft: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  subButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});