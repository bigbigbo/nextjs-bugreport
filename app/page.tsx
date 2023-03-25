/** Add your relevant code here for the issue to reproduce */
"use client";
import { useEffect } from "react"
import {Graph} from '@antv/x6'

export default function Home() {
  useEffect(() => {
    const graph = new Graph({
      container: document.getElementById("container"),
      width: 800,
      height: 600
    })
  }, [])
  
  return <div id="container"></div>
}
