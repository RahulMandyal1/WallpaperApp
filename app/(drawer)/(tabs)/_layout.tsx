import React from "react";
import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "search-plus" : "search-plus"}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="download"
        options={{
          title: "Download",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "download" : "download-outline"}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
