import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import LabeledInput from "../components/LabeledInput";

const API_KEY = "fca_live_f687LXJ6Koksu4nxeeK7Hxvhwpez7vwj5h7vQMjP"; // Replace with your real FreeCurrencyAPI key
const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";

export default function Index() {
  const [baseCurrency, setBaseCurrency] = useState("CAD");
  const [targetCurrency, setTargetCurrency] = useState("USD");
  const [amount, setAmount] = useState("1");

  const [convertedAmount, setConvertedAmount] = useState<string | null>(null);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateInputs = () => {
    setError("");
    const regex = /^[A-Z]{3}$/;

    if (!regex.test(baseCurrency)) {
      setError("Base currency must be a 3-letter uppercase code.");
      return false;
    }
    if (!regex.test(targetCurrency)) {
      setError("Destination currency must be a 3-letter uppercase code.");
      return false;
    }
    if (isNaN(Number(amount)) || Number(amount) <= 0) {
      setError("Amount must be a positive number.");
      return false;
    }
    return true;
  };

  const handleConvert = async () => {
    if (!validateInputs()) return;

 if (!API_KEY || API_KEY.length < 10) {
  setError("Invalid API key.");
  return;
}

    setLoading(true);
    setError("");
    setConvertedAmount(null);
    setExchangeRate(null);

    try {
      const url = `${BASE_URL}?apikey=${API_KEY}&base_currency=${baseCurrency}&currencies=${targetCurrency}`;
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok || !data.data?.[targetCurrency]) {
        setError("Invalid currency code or API error.");
        return;
      }

      const rate = data.data[targetCurrency];
      const result = Number(amount) * rate;

      setExchangeRate(rate);
      setConvertedAmount(result.toFixed(4));
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Currency Converter</Text>

      <View style={styles.card}>
        <LabeledInput
          label="Base Currency (e.g., CAD)"
          value={baseCurrency}
          maxLength={3}
          onChangeText={(t) => setBaseCurrency(t.toUpperCase())}
        />

        <LabeledInput
          label="Destination Currency (e.g., USD)"
          value={targetCurrency}
          maxLength={3}
          onChangeText={(t) => setTargetCurrency(t.toUpperCase())}
        />

        <LabeledInput
          label="Amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity
          style={[styles.button, loading && styles.disabled]}
          onPress={handleConvert}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Convert</Text>
          )}
        </TouchableOpacity>

        {convertedAmount && exchangeRate !== null && (
          <View style={styles.resultBox}>
            <Text style={styles.result}>
              {amount} {baseCurrency} ={" "}
              <Text style={styles.bold}>
                {convertedAmount} {targetCurrency}
              </Text>
            </Text>
            <Text style={styles.rate}>
              1 {baseCurrency} = {exchangeRate.toFixed(4)} {targetCurrency}
            </Text>
          </View>
        )}
      </View>

      {/* Expo Router Navigation */}
      <Link href="/about" style={styles.aboutLink}>
        Go to About Screen →
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F3F4F6",
    flexGrow: 1,
  },
  heading: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    elevation: 3,
  },
  button: {
    marginTop: 12,
    backgroundColor: "#111827",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  disabled: { opacity: 0.6 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  error: { color: "red", marginTop: 6, marginBottom: 6 },
  resultBox: {
    marginTop: 16,
    backgroundColor: "#E0F2FE",
    padding: 12,
    borderRadius: 8,
  },
  result: { fontSize: 16 },
  bold: { fontWeight: "700" },
  rate: { marginTop: 4, color: "#0369A1" },
  aboutLink: {
    marginTop: 20,
    color: "#2563EB",
    textAlign: "center",
    fontSize: 16,
  },
});
