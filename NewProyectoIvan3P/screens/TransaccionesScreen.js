import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function TransaccionesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Gestión de Transacciones</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.seccionTitulo}>Operaciones CRUD</Text>
        
        <TouchableOpacity style={styles.tarjeta}>
          <Text style={styles.tarjetaTitulo}>Agregar Transacción</Text>
          <Text style={styles.tarjetaDescripcion}>Registrar nuevo ingreso o gasto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tarjeta}>
          <Text style={styles.tarjetaTitulo}>Listar Transacciones</Text>
          <Text style={styles.tarjetaDescripcion}>Ver todas las transacciones</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tarjeta}>
          <Text style={styles.tarjetaTitulo}>Editar Transacción</Text>
          <Text style={styles.tarjetaDescripcion}>Modificar transacciones existentes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tarjeta}>
          <Text style={styles.tarjetaTitulo}>Eliminar Transacción</Text>
          <Text style={styles.tarjetaDescripcion}>Remover transacciones</Text>
        </TouchableOpacity>

        <Text style={styles.seccionTitulo}>Filtrado</Text>
        <View style={styles.filtros}>
          <TouchableOpacity style={styles.filtro}>
            <Text style={styles.filtroTexto}>Por Fecha</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filtro}>
            <Text style={styles.filtroTexto}>Por Categoría</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filtro}>
            <Text style={styles.filtroTexto}>Por Tipo</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#2a6db0",
  },
  headerTitulo: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  seccionTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    marginTop: 10,
  },
  tarjeta: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tarjetaTitulo: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  tarjetaDescripcion: {
    fontSize: 14,
    color: "#666",
  },
  filtros: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filtro: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: "center",
  },
  filtroTexto: {
    color: "#2a6db0",
    fontWeight: "500",
  },
});