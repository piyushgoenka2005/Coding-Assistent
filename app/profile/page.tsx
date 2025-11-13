"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { toast } from "sonner"
import { ArrowLeft, User, Mail, Calendar, Save } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { updateUserProfile } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Navbar } from "@/components/navbar"
import { StickyFooter } from "@/components/sticky-footer"

export default function ProfilePage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [displayName, setDisplayName] = useState("")
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    } else if (user) {
      setDisplayName(user.displayName || "")
    }
  }, [user, loading, router])

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!displayName.trim()) {
      toast.error("Display name cannot be empty")
      return
    }

    setIsSaving(true)
    const result = await updateUserProfile(displayName.trim())

    if (result.success) {
      toast.success("Profile updated successfully!")
    } else {
      toast.error("Failed to update profile", {
        description: result.error,
      })
    }
    setIsSaving(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const initials = (user.displayName || "User")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  const accountCreatedDate = user.metadata.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown"

  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(226, 232, 240, 0.12), transparent 60%), #000000",
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#e78a53]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#e78a53]/5 rounded-full blur-3xl" />

      {/* Navbar */}
      <Navbar />

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl pt-32 pb-24">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#e78a53] transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-3">Profile</h1>
          <p className="text-zinc-400 text-lg">Manage your account settings and preferences</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Profile Information Card */}
          <Card className="bg-zinc-900/50 backdrop-blur-xl border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Profile Information</CardTitle>
              <CardDescription className="text-zinc-400">
                Update your profile information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSave} className="space-y-6">
                {/* Avatar Display */}
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="h-24 w-24 border-2 border-zinc-700">
                    <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "User"} />
                    <AvatarFallback className="bg-[#e78a53]/20 text-[#e78a53] text-2xl">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-sm text-zinc-400">
                    Profile picture from {user.providerData[0]?.providerId === "google.com" ? "Google" : "your account"}
                  </p>
                </div>

                {/* Display Name Input */}
                <div className="space-y-2">
                  <Label htmlFor="displayName" className="text-white">
                    Display Name
                  </Label>
                  <Input
                    id="displayName"
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-[#e78a53] focus:ring-[#e78a53]/20"
                    placeholder="Enter your display name"
                    required
                  />
                </div>

                {/* Save Button */}
                <Button
                  type="submit"
                  disabled={isSaving}
                  className="w-full bg-[#e78a53] hover:bg-[#e78a53]/90 text-white"
                >
                  {isSaving ? (
                    <>
                      <span className="mr-2">Saving...</span>
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Account Details Card */}
          <Card className="bg-zinc-900/50 backdrop-blur-xl border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Account Details</CardTitle>
              <CardDescription className="text-zinc-400">
                Your account information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Mail className="h-4 w-4" />
                  <Label className="text-zinc-400">Email</Label>
                </div>
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-md px-3 py-2 text-white">
                  {user.email}
                </div>
                <p className="text-xs text-zinc-500">
                  Email cannot be changed here
                </p>
              </div>

              {/* Account Created */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Calendar className="h-4 w-4" />
                  <Label className="text-zinc-400">Member Since</Label>
                </div>
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-md px-3 py-2 text-white">
                  {accountCreatedDate}
                </div>
              </div>

              {/* Provider */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-400">
                  <User className="h-4 w-4" />
                  <Label className="text-zinc-400">Sign-in Method</Label>
                </div>
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-md px-3 py-2 text-white capitalize">
                  {user.providerData[0]?.providerId === "google.com"
                    ? "Google"
                    : user.providerData[0]?.providerId === "password"
                    ? "Email & Password"
                    : "Unknown"}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Spacer to ensure footer can appear */}
      <div className="h-96" />

      {/* Footer */}
      <StickyFooter />
    </div>
  )
}

