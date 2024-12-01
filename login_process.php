session_start();  // Avvia la sessione per mantenere lo stato di login

// Credenziali di esempio (username e password fissi)
$valid_username = "socio";  // Imposta l'username che vuoi usare
$valid_password = "socio";  // Imposta la password che vuoi usare

// Recupera i dati dal form (username e password inviati tramite POST)
$username = $_POST['username'];
$password = $_POST['password'];

// Controlla se le credenziali sono corrette
if ($username == $valid_username && $password == $valid_password) {
    // Imposta una variabile di sessione per segnare che l'utente è autenticato
    $_SESSION['logged_in'] = true;
    
    // Reindirizza l'utente alla pagina di selezione lingua (index.html)
    header("Location: index.html");  // Reindirizza alla pagina di selezione lingua
    exit();  // Termina l'esecuzione del codice
} else {
    // Login fallito, mostra un messaggio di errore
    echo "<p>Invalid credentials. Please try again.</p>";
    // Puoi anche reindirizzare a una pagina di errore o login in caso di fallimento
}
?>
