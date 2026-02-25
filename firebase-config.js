// Configuração do Firebase (Substitua pelos seus dados do console do Firebase)
const firebaseConfig = {
    apiKey: "AIzaSyCKbZxd2VptTcVtmsNwiICFSJhNTeMJtpc",
    authDomain: "money-postos.firebaseapp.com",
    projectId: "money-postos",
    storageBucket: "money-postos.firebasestorage.app",
    messagingSenderId: "792630576163",
    appId: "1:792630576163:web:8048bbffaf2cc289b0dd96"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
