"use client";

import type { Metadata } from "next";
import Head from "next/head";
import React, { useState, useEffect } from "react";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

function RootLayout({ children }: { children: React.ReactNode }) {
    // -------------------------------------------------------------------------
    // Rendering
    // -------------------------------------------------------------------------
    const final_render_element = (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );

    return final_render_element;
}

export default RootLayout;
