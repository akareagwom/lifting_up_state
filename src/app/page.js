"use client";
import Talk from "@/components/talk"
import Discuss from "../components/discuss"
import Child from "@/components/child"
import Parent from "@/components/parent"
import Nav from "@/components/nav"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "@/Dashboard";


export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Parent/>} />
        <Route path="/App" element={<App/>}/>
      </Routes>
    </BrowserRouter>
  )
}
