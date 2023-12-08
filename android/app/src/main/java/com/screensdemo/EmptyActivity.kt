package com.screensdemo

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.Toolbar

class EmptyActivity : AppCompatActivity(R.layout.activity_empty) {

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    findViewById<Toolbar>(R.id.toolbar).apply {
      setSupportActionBar(this)
      setNavigationOnClickListener { onBackPressedDispatcher.onBackPressed() }
    }
    supportActionBar?.apply {
      setDisplayHomeAsUpEnabled(true)
      setDisplayShowHomeEnabled(true)
    }
  }
}
