package xyz.vercaemer.app

import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class LoggedInActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_logged_in)

        val username = intent.getStringExtra("username")
        if (username != null) {
            Toast.makeText(this, "Welcome $username", Toast.LENGTH_LONG).show()
        }
    }
}