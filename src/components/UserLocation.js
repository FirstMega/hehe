"use client";
import { useEffect, useState } from "react";

const UserLocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        },
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div class="flex justify-between px-64">
      <p class="p-4 border-2 rounded border-violet-400 font-bold">
        Latitude: {latitude}
      </p>
      <p class="p-4 border-2 rounded border-violet-400 font-bold">
        Longitude: {longitude}
      </p>
    </div>
  );
};

export default UserLocation;
