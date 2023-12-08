package com.screensdemo

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.facebook.react.ReactFragment
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler

class MainActivity : AppCompatActivity(R.layout.activity_main), DefaultHardwareBackBtnHandler {

    override fun onCreate(savedInstanceState: Bundle?) {
        // For hybrid applications, restoring from state is imperative
        super.onCreate(savedInstanceState)
        addReactNativeFragment()
    }

    private fun addReactNativeFragment() {
        val fragment = ReactFragment
            .Builder()
            .setComponentName("ScreensDemo")
            .setFabricEnabled(false)
            .setLaunchOptions(Bundle.EMPTY)
            .build()
        supportFragmentManager.beginTransaction()
            .add(R.id.fragmentContainer, fragment)
            .commit()
    }

    override fun invokeDefaultOnBackPressed() {
        onBackPressed()
    }
}
