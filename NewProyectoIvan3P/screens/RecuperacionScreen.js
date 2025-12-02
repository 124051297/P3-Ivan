import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function RecuperacionScreen({ navigation }) {
  const [email, setEmail] = useState("");

  const validarCorreo = (correo) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  };
  const enviarCorreo = () => {
    if (!validarCorreo(email)) {
      Alert.alert("Correo inválido", "Por favor ingresa un correo válido.");
      return;
    }
    Alert.alert("Enlace enviado", `Se ha enviado un enlace de recuperación a ${email}`);
    setEmail("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Recuperar Contraseña</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="key" size={64} color="#fff" />
        </View>

        <Text style={styles.instructions}>
          Selecciona una forma para recuperar tu contraseña.
        </Text>

        {/* Botón: Recuperar con Correo */}
        <TouchableOpacity style={styles.button}>
          <Ionicons name="mail" size={24} color="#fff" />
          <Text style={styles.buttonText}>Recuperación con Correo</Text>
        </TouchableOpacity>

        {/* Botón: Recuperar con Número */}
        <TouchableOpacity style={[styles.button, { backgroundColor: "#0066aa", marginTop: 15 }]}>
          <Ionicons name="call" size={24} color="#fff" />
          <Text style={styles.buttonText}>Recuperación con Número</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate("MenuScreen")}
          activeOpacity={0.7}
        >
          <Text style={styles.secondaryButtonText}>Volver al Inicio de Sesión</Text>
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
  },
  iconContainer: {
    marginBottom: 30,
  },
  instructions: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 22,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#004481",
    paddingVertical: 18,
    borderRadius: 12,
    width: "100%",
  },
  iconButton: {
    marginRight: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    marginTop: 20,
    padding: 10,
  },
  secondaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
});
