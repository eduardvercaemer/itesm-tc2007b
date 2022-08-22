package xyz.vercaemer.app

import android.content.Intent
import android.os.Bundle
import android.view.inputmethod.EditorInfo
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        findViewById<Button>(R.id.login_button).setOnClickListener {
            this.attemptLogin()
        }
        findViewById<EditText>(R.id.edtUsername).setOnEditorActionListener { v, actionId, event ->
            if (actionId == EditorInfo.IME_ACTION_DONE)
                this.attemptLogin()
            true
        }
        findViewById<EditText>(R.id.edtPassword).setOnEditorActionListener { v, actionId, event ->
            if (actionId == EditorInfo.IME_ACTION_DONE)
                this.attemptLogin()
            true
        }
        findViewById<Button>(R.id.cancel_button).setOnClickListener {
            finish()
        }
    }

    fun attemptLogin() {
        val username = findViewById<EditText>(R.id.edtUsername).text.toString()
        val password = findViewById<EditText>(R.id.edtPassword).text.toString()
        if (username == "admin" && password == "admin") {
            val intent = Intent(this, LoggedInActivity::class.java)
            intent.putExtra("username", username)
            startActivity(intent)
        } else {
            Toast.makeText(this, "Invalid username or password", Toast.LENGTH_SHORT).show()
        }
    }
}