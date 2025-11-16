import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ListaScreen() {
  const transacciones = [
    { id: 1, descripcion: "Salario Marzo", monto: 2500, tipo: "ingreso", categoria: "Nómina", fecha: "01/03/2024" },
    { id: 2, descripcion: "Supermercado", monto: 450, tipo: "gasto", categoria: "Alimentación", fecha: "15/03/2024" },
    { id: 3, descripcion: "Pago de luz", monto: 320, tipo: "gasto", categoria: "Servicios", fecha: "10/03/2024" },
    { id: 4, descripcion: "Freelance", monto: 800, tipo: "ingreso", categoria: "Extra", fecha: "05/03/2024" },
    { id: 5, descripcion: "Gasolina", monto: 280, tipo: "gasto", categoria: "Transporte", fecha: "12/03/2024" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Lista de Transacciones</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Resumen Marzo 2024</Text>
          <View style={styles.summaryStats}>
            <View style={styles.stat}>
              <Text style={styles.statValue}>5</Text>
              <Text style={styles.statLabel}>Transacciones</Text>
            </View>
            <View style={styles.stat}>
              <Text style={[styles.statValue, styles.income]}>+$3,300</Text>
              <Text style={styles.statLabel}>Ingresos</Text>
            </View>
            <View style={styles.stat}>
              <Text style={[styles.statValue, styles.expense]}>-$1,050</Text>
              <Text style={styles.statLabel}>Gastos</Text>
            </View>
          </View>
        </View>

        <View style={styles.filters}>
          <TouchableOpacity style={styles.filterActive}>
            <Text style={styles.filterTextActive}>Todas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filter}>
            <Text style={styles.filterText}>Ingresos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filter}>
            <Text style={styles.filterText}>Gastos</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Transacciones Recientes</Text>
        
        {transacciones.map((transaccion) => (
          <View key={transaccion.id} style={styles.transactionCard}>
            <View style={[
              styles.transactionIcon,
              transaccion.tipo === 'ingreso' ? styles.incomeIcon : styles.expenseIcon
            ]}>
              <Ionicons 
                name={transaccion.tipo === 'ingreso' ? 'trending-up' : 'trending-down'} 
                size={20} 
                color="#fff" 
              />
            </View>
            
            <View style={styles.transactionInfo}>
              <Text style={styles.transactionDescription}>{transaccion.descripcion}</Text>
              <Text style={styles.transactionCategory}>{transaccion.categoria}</Text>
              <Text style={styles.transactionDate}>{transaccion.fecha}</Text>
            </View>
            
            <View style={styles.transactionAmount}>
              <Text style={[
                styles.amountText,
                transaccion.tipo === 'ingreso' ? styles.incomeAmount : styles.expenseAmount
              ]}>
                {transaccion.tipo === 'ingreso' ? '+' : '-'}${transaccion.monto}
              </Text>
            </View>
          </View>
        ))}
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
  summaryCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2a6db0",
    marginBottom: 15,
    textAlign: "center",
  },
  summaryStats: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  stat: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2a6db0",
    marginBottom: 5,
  },
  income: {
    color: "#34C759",
  },
  expense: {
    color: "#FF3B30",
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
  },
  filters: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 4,
    marginBottom: 20,
  },
  filter: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  filterActive: {
    flex: 1,
    backgroundColor: "#2a6db0",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  filterText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  filterTextActive: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  transactionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  incomeIcon: {
    backgroundColor: "#34C759",
  },
  expenseIcon: {
    backgroundColor: "#FF3B30",
  },
  transactionInfo: {
    flex: 1,
  },
  transactionDescription: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 2,
  },
  transactionCategory: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  transactionDate: {
    fontSize: 12,
    color: "#999",
  },
  transactionAmount: {
    alignItems: "flex-end",
  },
  amountText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  incomeAmount: {
    color: "#34C759",
  },
  expenseAmount: {
    color: "#FF3B30",
  },
});