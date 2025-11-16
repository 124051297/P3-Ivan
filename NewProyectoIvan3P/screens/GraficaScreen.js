import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function GraficaScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Gráficas y Reportes</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Ingresos vs Egresos - Marzo 2024</Text>
          <View style={styles.chartPlaceholder}>
            <Ionicons name="bar-chart" size={64} color="#2a6db0" />
            <Text style={styles.chartText}>Gráfica de Barras Comparativa</Text>
          </View>
          <View style={styles.chartLegend}>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#34C759' }]} />
              <Text style={styles.legendText}>Ingresos: $15,250</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#FF3B30' }]} />
              <Text style={styles.legendText}>Egresos: $8,750</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ingresos y Egresos por Categoría</Text>
          
          <TouchableOpacity style={styles.reportCard}>
            <View style={styles.reportIcon}>
              <Ionicons name="restaurant" size={24} color="#fff" />
            </View>
            <View style={styles.reportInfo}>
              <Text style={styles.reportCategory}>Alimentación</Text>
              <Text style={styles.reportAmount}>$2,500</Text>
            </View>
            <Text style={styles.reportPercentage}>25%</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.reportCard}>
            <View style={[styles.reportIcon, { backgroundColor: '#4BC7F3' }]}>
              <Ionicons name="car" size={24} color="#fff" />
            </View>
            <View style={styles.reportInfo}>
              <Text style={styles.reportCategory}>Transporte</Text>
              <Text style={styles.reportAmount}>$1,800</Text>
            </View>
            <Text style={styles.reportPercentage}>18%</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.reportCard}>
            <View style={[styles.reportIcon, { backgroundColor: '#34C759' }]}>
              <Ionicons name="home" size={24} color="#fff" />
            </View>
            <View style={styles.reportInfo}>
              <Text style={styles.reportCategory}>Hogar</Text>
              <Text style={styles.reportAmount}>$3,200</Text>
            </View>
            <Text style={styles.reportPercentage}>32%</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ingresos y Egresos por Mes</Text>
          
          <TouchableOpacity style={styles.monthCard}>
            <Text style={styles.monthName}>Marzo 2024</Text>
            <View style={styles.monthStats}>
              <Text style={styles.monthIncome}>+$15,250</Text>
              <Text style={styles.monthExpense}>-$8,750</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.monthCard}>
            <Text style={styles.monthName}>Febrero 2024</Text>
            <View style={styles.monthStats}>
              <Text style={styles.monthIncome}>+$14,500</Text>
              <Text style={styles.monthExpense}>-$7,800</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.monthCard}>
            <Text style={styles.monthName}>Enero 2024</Text>
            <View style={styles.monthStats}>
              <Text style={styles.monthIncome}>+$13,200</Text>
              <Text style={styles.monthExpense}>-$6,900</Text>
            </View>
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
  chartContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    textAlign: "center",
  },
  chartPlaceholder: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    marginBottom: 15,
  },
  chartText: {
    marginTop: 10,
    color: "#666",
    fontSize: 14,
  },
  chartLegend: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendText: {
    fontSize: 12,
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
  reportCard: {
    flexDirection: "row",
    alignItems: "center",
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
  reportIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2a6db0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  reportInfo: {
    flex: 1,
  },
  reportCategory: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 2,
  },
  reportAmount: {
    fontSize: 14,
    color: "#666",
  },
  reportPercentage: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2a6db0",
  },
  monthCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  monthName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  monthStats: {
    alignItems: "flex-end",
  },
  monthIncome: {
    fontSize: 14,
    color: "#34C759",
    marginBottom: 2,
  },
  monthExpense: {
    fontSize: 14,
    color: "#FF3B30",
  },
});