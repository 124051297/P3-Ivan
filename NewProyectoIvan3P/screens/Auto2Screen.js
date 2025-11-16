import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Auto2Screen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Validación de credenciales</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.successIcon}>
          <Ionicons name="shield-checkmark" size={80} color="#4BC7F3" />
        </View>
        
        <Text style={styles.statusText}>¡Validación Exitosa!</Text>
        <Text style={styles.subText}>Tus credenciales han sido verificadas correctamente</Text>

        <TouchableOpacity style={styles.button}>
          <Ionicons name="checkmark-circle" size={24} color="#fff" />
          <Text style={styles.buttonText}>Continuar a la App</Text>
        </TouchableOpacity>
      </View>
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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    gap: 25,
  },
  successIcon: {
    marginBottom: 20,
  },
  statusText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subText: {
    color: "#e0f0ff",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 22,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#004481",
    paddingVertical: 18,
    borderRadius: 12,
    gap: 12,
    width: "100%",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});