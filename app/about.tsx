import { View, Text, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About This App</Text>

      <View style={styles.box}>
        <Text style={styles.label}>Student Name:</Text>
        <Text style={styles.value}>Najnin Sultana</Text>

        <Text style={[styles.label, { marginTop: 12 }]}>Student ID:</Text>
        <Text style={styles.value}>101336862</Text>
      </View>

      <View style={styles.descBox}>
        <Text style={styles.descHeading}>Application Description</Text>
        <Text style={styles.desc}>
          This app converts one currency to another using real-time exchange
          rates from the FreeCurrencyAPI. It validates user input, handles API
          errors, and displays the converted result and exchange rate used.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  heading: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 18,
    textAlign: "center",
  },
  box: {
    backgroundColor: "#E5E7EB",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#374151",
    fontWeight: "600",
  },
  value: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  descBox: {
    padding: 16,
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
  },
  descHeading: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  desc: {
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 20,
  },
});
