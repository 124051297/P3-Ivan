import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CrudScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Gestión de Transacciones</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.welcomeSection}>
          <Ionicons name="wallet" size={64} color="#2a6db0" />
          <Text style={styles.welcomeTitle}>Control de Transacciones</Text>
          <Text style={styles.welcomeText}>
            Gestiona tus ingresos y gastos de manera eficiente
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Operaciones CRUD Disponibles</Text>
        
        <View style={styles.crudGrid}>
          <TouchableOpacity style={styles.crudCard}>
            <Ionicons name="add-circle" size={40} color="#2a6db0" />
            <Text style={styles.crudTitle}>Agregar</Text>
            <Text style={styles.crudDesc}>Nueva transacción</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.crudCard}>
            <Ionicons name="list" size={40} color="#2a6db0" />
            <Text style={styles.crudTitle}>Listar</Text>
            <Text style={styles.crudDesc}>Ver transacciones</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.crudCard}>
            <Ionicons name="create" size={40} color="#2a6db0" />
            <Text style={styles.crudTitle}>Editar</Text>
            <Text style={styles.crudDesc}>Modificar datos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.crudCard}>
            <Ionicons name="trash" size={40} color="#2a6db0" />
            <Text style={styles.crudTitle}>Eliminar</Text>
            <Text style={styles.crudDesc}>Remover registro</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Resumen Mensual</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>$15,250</Text>
              <Text style={styles.statLabel}>Ingresos</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>$8,750</Text>
              <Text style={styles.statLabel}>Gastos</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>$6,500</Text>
              <Text style={styles.statLabel}>Balance</Text>
            </View>
          </View>
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
  welcomeSection: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 30,
    alignItems: "center",
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2a6db0",
    marginTop: 15,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    marginTop: 10,
  },
  crudGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  crudCard: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  crudTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2a6db0",
    marginTop: 10,
    marginBottom: 5,
  },
  crudDesc: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  statsSection: {
    marginBottom: 20,
  },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statItem: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2a6db0",
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
  },
});