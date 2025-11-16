import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AgregarScreen() {
  const [monto, setMonto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [tipo, setTipo] = useState("gasto");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Agregar Transacción</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Nueva Transacción</Text>
          
          <View style={styles.typeSelector}>
            <TouchableOpacity 
              style={[styles.typeButton, tipo === 'ingreso' && styles.typeButtonActive]}
              onPress={() => setTipo('ingreso')}
            >
              <Ionicons name="trending-up" size={20} color={tipo === 'ingreso' ? '#fff' : '#34C759'} />
              <Text style={[styles.typeText, tipo === 'ingreso' && styles.typeTextActive]}>Ingreso</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.typeButton, tipo === 'gasto' && styles.typeButtonActive]}
              onPress={() => setTipo('gasto')}
            >
              <Ionicons name="trending-down" size={20} color={tipo === 'gasto' ? '#fff' : '#FF3B30'} />
              <Text style={[styles.typeText, tipo === 'gasto' && styles.typeTextActive]}>Gasto</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Monto</Text>
            <TextInput
              style={styles.input}
              placeholder="$0.00"
              placeholderTextColor="#999"
              value={monto}
              onChangeText={setMonto}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Descripción</Text>
            <TextInput
              style={styles.input}
              placeholder="Descripción de la transacción"
              placeholderTextColor="#999"
              value={descripcion}
              onChangeText={setDescripcion}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Categoría</Text>
            <TextInput
              style={styles.input}
              placeholder="Selecciona una categoría"
              placeholderTextColor="#999"
              value={categoria}
              onChangeText={setCategoria}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Fecha</Text>
            <TextInput
              style={styles.input}
              placeholder="DD/MM/AAAA"
              placeholderTextColor="#999"
              value={new Date().toLocaleDateString()}
            />
          </View>

          <TouchableOpacity style={styles.submitButton}>
            <Ionicons name="save" size={24} color="#fff" />
            <Text style={styles.submitButtonText}>Guardar Transacción</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a6db0",
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: "#1e5a9d",
  },
  headerTitulo: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  formContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  formTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2a6db0",
    marginBottom: 25,
    textAlign: "center",
  },
  typeSelector: {
    flexDirection: "row",
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    padding: 4,
    marginBottom: 25,
  },
  typeButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
  },
  typeButtonActive: {
    backgroundColor: "#2a6db0",
  },
  typeText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666",
  },
  typeTextActive: {
    color: "#fff",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  input: {
    borderWidth: 2,
    borderColor: "#e9ecef",
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#f8f9fa",
  },
  submitButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2a6db0",
    paddingVertical: 18,
    borderRadius: 12,
    gap: 12,
    marginTop: 10,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});