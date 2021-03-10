package debugaddress;

import android.content.SharedPreferences;
import android.os.Bundle;
import android.preference.PreferenceManager;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class DebugAddressModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext reactContext;

    public DebugAddressModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "DebugAddress";  // Name of the Native Modules.
    }

    /**
    * Sets the debug host address
    * 
    * @param debugAddress Address for debugging server, using default address "127.0.0.1:8081"
    */
    @ReactMethod
    public void setDebugAddress(String debugAddress, Promise promise) {
        try {
            SharedPreferences preferences =
                PreferenceManager.getDefaultSharedPreferences(reactContext);
            preferences.edit().putString("debug_http_host", debugAddress).apply();

            promise.resolve(true); // return encryptedText
        }
        catch (Exception e) {
            promise.reject(
                "SET_DEBUG_ADDRESS_FAILED",
                "Setting the debug host and port failed: " + e.getMessage()
            );
        }
    }

    /**
    * Sets the debug host address
    * 
    * @param debugHost Host for debugging server
    * @param debugPort Port for debugging server
    */
    @ReactMethod
    public void setDebugAddress(String debugHost, int debugPort, Promise promise) {
        String debugAddress = String.format("%s:%s", debugPort, debugHost);
        setDebugAddress(debugAddress, promise);
    }

    /**
    * Sets the debug host address
    * 
    * @param debugPort Port for debugging server, using default host "127.0.0.1"
    */
    @ReactMethod
    public void setDebugAddress(int debugPort, Promise promise) {
        setDebugAddress("127.0.0.1", debugPort, promise);
    }

    /**
    * Gets the debug host address
        *
        * @return the debug host address
    */
    @ReactMethod
    public void getDebugAddress(Promise promise) {
        SharedPreferences preferences = PreferenceManager.getDefaultSharedPreferences(reactContext);
        promise.resolve(preferences.getString("debug_http_host", "127.0.0.1:8081"));
    }
}

