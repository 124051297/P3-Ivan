import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IngresosScreen({ onBack }) {
  const ingresos = [
    { id: 1, descripcion: "Salario", monto: 2500.00, categoria: "Nómina", fecha: "01/03/2024", recurrente: true },
    { id: 2, descripcion: "Freelance", monto: 800.00, categoria: "Trabajo Independiente", fecha: "05/03/2024", recurrente: false },
    { id: 3, descripcion: "Inversiones", monto: 150.75, categoria: "Dividendos", fecha: "10/03/2024", recurrente: true },
    { id: 4, descripcion: "Venta online", monto: 120.00, categoria: "Ventas", fecha: "12/03/2024", recurrente: false },
    { id: 5, descripcion: "Bono", monto: 300.00, categoria: "Extra", fecha: "20/03/2024", recurrente: false },
  ];

  const totalIngresos = ingresos.reduce((total, ingreso) => total + ingreso.monto, 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitulo}>Ingresos</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Total de Ingresos</Text>
        <Text style={styles.summaryAmount}>${totalIngresos.toFixed(2)}</Text>
        <Text style={styles.summaryPeriod}>Marzo 2024</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{ingresos.length}</Text>
            <Text style={styles.statLabel}>Transacciones</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>${(totalIngresos / ingresos.length).toFixed(2)}</Text>
            <Text style={styles.statLabel}>Promedio</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>
              {ingresos.filter(i => i.recurrente).length}
            </Text>
            <Text style={styles.statLabel}>Recurrentes</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Historial de Ingresos</Text>
        
        {ingresos.map((ingreso) => (
          <View key={ingreso.id} style={styles.incomeCard}>
            <View style={styles.incomeIcon}>
              <Ionicons name="trending-up" size={24} color="#34C759" />
              {ingreso.recurrente && (
                <View style={styles.recurrentBadge}>
                  <Ionicons name="repeat" size={12} color="#fff" />
                </View>
              )}
            </View>
            
            <View style={styles.incomeInfo}>
              <Text style={styles.incomeDescription}>{ingreso.descripcion}</Text>
              <Text style={styles.incomeCategory}>{ingreso.categoria}</Text>
              <Text style={styles.incomeDate}>{ingreso.fecha}</Text>
            </View>
            
            <View style={styles.incomeAmount}>
              <Text style={styles.amountText}>+${ingreso.monto.toFixed(2)}</Text>
              {ingreso.recurrente && (
                <Text style={styles.recurrentText}>Recurrente</Text>
              )}
            </View>
          </View>
        ))}

        <View style={styles.categories}>
          <Text style={styles.sectionTitle}>Ingresos por Categoría</Text>
          
          <View style={styles.categoryItem}>
            <View style={styles.categoryInfo}>
              <View style={[styles.categoryColor, { backgroundColor: '#2a6db0' }]} />
              <Text style={styles.categoryName}>Nómina</Text>
            </View>
            <Text style={styles.categoryAmount}>$2,500.00</Text>
            <Text style={styles.categoryPercentage}>76%</Text>
          </View>

          <View style={styles.categoryItem}>
            <View style={styles.categoryInfo}>
              <View style={[styles.categoryColor, { backgroundColor: '#4BC7F3' }]} />
              <Text style={styles.categoryName}>Trabajo Independiente</Text>
            </View>
            <Text style={styles.categoryAmount}>$800.00</Text>
            <Text style={styles.categoryPercentage}>24%</Text>
          </View>

          <View style={styles.categoryItem}>
            <View style={styles.categoryInfo}>
              <View style={[styles.categoryColor, { backgroundColor: '#34C759' }]} />
              <Text style={styles.categoryName}>Dividendos</Text>
            </View>
            <Text style={styles.categoryAmount}>$150.75</Text>
            <Text style={styles.categoryPercentage}>5%</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#2a6db0",
  },
  backButton: {
    padding: 5,
  },
  headerTitulo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  placeholder: {
    width: 24,
  },
  summaryCard: {
    backgroundColor: "#34C759",
    margin: 20,
    padding: 25,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  summaryTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  summaryAmount: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 5,
  },
  summaryPeriod: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.9,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statItem: {
    alignItems: "center",
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    marginTop: 10,
  },
  incomeCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  incomeIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E8F5E8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    position: "relative",
  },
  recurrentBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#34C759",
    justifyContent: "center",
    alignItems: "center",
  },
  incomeInfo: {
    flex: 1,
  },
  incomeDescription: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 2,
  },
  incomeCategory: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  incomeDate: {
    fontSize: 12,
    color: "#999",
  },
  incomeAmount: {
    alignItems: "flex-end",
  },
  amountText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#34C759",
    marginBottom: 4,
  },
  recurrentText: {
    fontSize: 10,
    color: "#34C759",
    backgroundColor: "#E8F5E8",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  categories: {
    marginTop: 20,
    marginBottom: 30,
  },
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  categoryColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  categoryName: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  categoryAmount: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginRight: 10,
  },
  categoryPercentage: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
});