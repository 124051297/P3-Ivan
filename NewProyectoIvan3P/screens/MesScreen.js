import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MesScreen({ onBack }) {
  const meses = [
    { mes: "Enero 2024", ingresos: 14200, gastos: 8900, balance: 5300 },
    { mes: "Febrero 2024", ingresos: 15600, gastos: 10200, balance: 5400 },
    { mes: "Marzo 2024", ingresos: 16300, gastos: 8750, balance: 7550 },
    { mes: "Abril 2024", ingresos: 14800, gastos: 9200, balance: 5600 },
    { mes: "Mayo 2024", ingresos: 17200, gastos: 11000, balance: 6200 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitulo}>Tendencias Mensuales</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.chartSection}>
          <Text style={styles.sectionTitle}>Evolución Mensual</Text>
          <View style={styles.chartContainer}>
            <View style={styles.chartPlaceholder}>
              <Ionicons name="analytics" size={64} color="#2a6db0" />
              <Text style={styles.chartPlaceholderText}>Gráfica de Tendencias</Text>
              <Text style={styles.chartSubtext}>Ingresos vs Gastos últimos 6 meses</Text>
            </View>
          </View>
        </View>

        <View style={styles.statsOverview}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>$78,100</Text>
            <Text style={styles.statLabel}>Ingresos Totales</Text>
            <View style={[styles.trend, styles.trendUp]}>
              <Ionicons name="trending-up" size={16} color="#34C759" />
              <Text style={styles.trendText}>12%</Text>
            </View>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statValue}>$48,050</Text>
            <Text style={styles.statLabel}>Gastos Totales</Text>
            <View style={[styles.trend, styles.trendUp]}>
              <Ionicons name="trending-up" size={16} color="#FF3B30" />
              <Text style={styles.trendText}>8%</Text>
            </View>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statValue}>$30,050</Text>
            <Text style={styles.statLabel}>Balance Total</Text>
            <View style={[styles.trend, styles.trendUp]}>
              <Ionicons name="trending-up" size={16} color="#2a6db0" />
              <Text style={styles.trendText}>15%</Text>
            </View>
          </View>
        </View>

        <View style={styles.monthsList}>
          <Text style={styles.sectionTitle}>Detalle por Mes</Text>
          
          {meses.map((item, index) => (
            <TouchableOpacity key={index} style={styles.monthCard}>
              <View style={styles.monthHeader}>
                <Text style={styles.monthName}>{item.mes}</Text>
                <Text style={[
                  styles.monthBalance,
                  item.balance >= 0 ? styles.positiveBalance : styles.negativeBalance
                ]}>
                  ${item.balance.toLocaleString()}
                </Text>
              </View>
              
              <View style={styles.monthStats}>
                <View style={styles.statRow}>
                  <Text style={styles.statLabel}>Ingresos:</Text>
                  <Text style={styles.incomeStat}>+${item.ingresos.toLocaleString()}</Text>
                </View>
                <View style={styles.statRow}>
                  <Text style={styles.statLabel}>Gastos:</Text>
                  <Text style={styles.expenseStat}>-${item.gastos.toLocaleString()}</Text>
                </View>
              </View>
              
              <View style={styles.progressBar}>
                <View 
                  style={[
                    styles.progressFill, 
                    { width: `${(item.gastos / item.ingresos) * 100}%` }
                  ]} 
                />
              </View>
              <Text style={styles.progressText}>
                {((item.gastos / item.ingresos) * 100).toFixed(1)}% gastado del ingreso
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.insights}>
          <Text style={styles.sectionTitle}>Insights</Text>
          <View style={styles.insightCard}>
            <Ionicons name="bulb" size={24} color="#FFD700" />
            <View style={styles.insightText}>
              <Text style={styles.insightTitle}>Mejor mes en ahorros</Text>
              <Text style={styles.insightDescription}>
                Marzo 2024 fue tu mejor mes con $7,550 de ahorro.
              </Text>
            </View>
          </View>
          
          <View style={styles.insightCard}>
            <Ionicons name="alert" size={24} color="#FF3B30" />
            <View style={styles.insightText}>
              <Text style={styles.insightTitle}>Mayor gasto</Text>
              <Text style={styles.insightDescription}>
                Febrero 2024 tuvo los gastos más altos ($10,200).
              </Text>
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
  content: {
    flex: 1,
    padding: 20,
  },
  chartSection: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  chartContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  chartPlaceholder: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
  },
  chartPlaceholderText: {
    marginTop: 10,
    color: "#666",
    fontSize: 16,
    fontWeight: "500",
  },
  chartSubtext: {
    marginTop: 5,
    color: "#999",
    fontSize: 12,
  },
  statsOverview: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2a6db0",
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
    textAlign: "center",
  },
  trend: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  trendUp: {
    backgroundColor: "#E8F5E8",
  },
  trendText: {
    fontSize: 12,
    fontWeight: "500",
    marginLeft: 2,
  },
  monthsList: {
    marginBottom: 25,
  },
  monthCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  monthHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  monthName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  monthBalance: {
    fontSize: 18,
    fontWeight: "bold",
  },
  positiveBalance: {
    color: "#34C759",
  },
  negativeBalance: {
    color: "#FF3B30",
  },
  monthStats: {
    marginBottom: 15,
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  incomeStat: {
    fontSize: 14,
    fontWeight: "600",
    color: "#34C759",
  },
  expenseStat: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FF3B30",
  },
  progressBar: {
    width: "100%",
    height: 6,
    backgroundColor: "#f0f0f0",
    borderRadius: 3,
    marginBottom: 8,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#2a6db0",
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  insights: {
    marginBottom: 30,
  },
  insightCard: {
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
  insightText: {
    flex: 1,
    marginLeft: 15,
  },
  insightTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 2,
  },
  insightDescription: {
    fontSize: 12,
    color: "#666",
    lineHeight: 16,
  },
});