981_Time_Based_Key-Value_Store
# 981. Time Based Key-Value Store

Create a timebased key-value store class TimeMap, that supports two
        operations.

    1. set(string key, string value, int timestamp)

    
        Stores the key and value, along with the given
            timestamp.
        
    

    2. get(string key, int timestamp)

    
        Returns a value such that set(key, value, timestamp_prev) was called
            previously, with timestamp_prev <= timestamp.
        
        If there are multiple such values, it returns the one with the largest timestamp_prev.
        
        If there are no values, it returns the empty string ("").