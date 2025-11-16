import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PresupuestoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Presupuestos Mensuales</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.budgetOverview}>
          <Text style={styles.overviewTitle}>Presupuesto Actual - Marzo 2024</Text>
          <Text style={styles.overviewAmount}>$10,000</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '65%' }]} />
          </View>
          <Text style={styles.overviewSubtitle}>Gastado: $6,500 / Restante: $3,500</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Definición de Presupuesto Mensual</Text>
          
          <TouchableOpacity style={styles.budgetCard}>
            <View style={styles.budgetIcon}>
              <Ionicons name="add-circle" size={28} color="#2a6db0" />
            </View>
            <View style={styles.budgetText}>
              <Text style={styles.budgetAction}>Definir Presupuesto</Text>
              <Text style={styles.budgetDescription}>Establecer nuevo presupuesto mensual</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.budgetCard}>
            <View style={styles.budgetIcon}>
              <Ionicons name="eye" size={28} color="#2a6db0" />
            </View>
            <View style={styles.budgetText}>
              <Text style={styles.budgetAction}>Ver Presupuestos</Text>
              <Text style={styles.budgetDescription}>Consultar presupuestos históricos</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.budgetCard}>
            <View style={styles.budgetIcon}>
              <Ionicons name="create" size={28} color="#2a6db0" />
            </View>
            <View style={styles.budgetText}>
              <Text style={styles.budgetAction}>Editar Presupuesto</Text>
              <Text style={styles.budgetDescription}>Modificar presupuesto actual</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.budgetCard}>
            <View style={styles.budgetIcon}>
              <Ionicons name="trash" size={28} color="#2a6db0" />
            </View>
            <View style={styles.budgetText}>
              <Text style={styles.budgetAction}>Eliminar Presupuesto</Text>
              <Text style={styles.budgetDescription}>Remover presupuesto del sistema</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Presupuestos por Categoría</Text>
          
          <View style={styles.categoryBudget}>
            <View style={styles.categoryInfo}>
              <Text style={styles.categoryName}>Alimentación</Text>
              <Text style={styles.categoryAmount}>$1,500 / $2,000</Text>
            </View>
            <View style={styles.categoryProgress}>
              <View style={[styles.categoryProgressFill, { width: '75%' }]} />
            </View>
          </View>

          <View style={styles.categoryBudget}>
            <View style={styles.categoryInfo}>
              <Text style={styles.categoryName}>Transporte</Text>
              <Text style={styles.categoryAmount}>$800 / $1,000</Text>
            </View>
            <View style={styles.categoryProgress}>
              <View style={[styles.categoryProgressFill, { width: '80%' }]} />
            </View>
          </View>

          <View style={styles.categoryBudget}>
            <View style={styles.categoryInfo}>
              <Text style={styles.categoryName}>Entretenimiento</Text>
              <Text style={styles.categoryAmount}>$300 / $500</Text>
            </View>
            <View style={styles.categoryProgress}>
              <View style={[styles.categoryProgressFill, { width: '60%' }]} />
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
  budgetOverview: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 25,
    alignItems: "center",
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  overviewTitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  overviewAmount: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2a6db0",
    marginBottom: 20,
  },
  progressBar: {
    width: "100%",
    height: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    marginBottom: 15,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#4BC7F3",
    borderRadius: 5,
  },
  overviewSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  budgetCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  budgetIcon: {
    marginRight: 15,
  },
  budgetText: {
    flex: 1,
  },
  budgetAction: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  budgetDescription: {
    fontSize: 14,
    color: "#666",
  },
  categoryBudget: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  categoryAmount: {
    fontSize: 14,
    color: "#666",
  },
  categoryProgress: {
    width: "100%",
    height: 6,
    backgroundColor: "#f0f0f0",
    borderRadius: 3,
    overflow: "hidden",
  },
  categoryProgressFill: {
    height: "100%",
    backgroundColor: "#2a6db0",
    borderRadius: 3,
  },
});