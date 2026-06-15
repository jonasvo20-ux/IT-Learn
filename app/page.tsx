'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Marketing() {
  const router = useRouter()
  return (
    <>
      do once everything is functional, marketing page is not a priority right now
      <Button onClick={() => router.push("/login")}>
        go to signin
      </Button>
    </>
  )
}