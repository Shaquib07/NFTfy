"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CardContent, CardFooter } from "@/components/ui/card"

interface BusinessDetailsFormProps {
  data: {
    name: string
    description: string
    website: string
    logo: string
  }
  updateData: (data: Partial<BusinessDetailsFormProps["data"]>) => void
  onNext: () => void
}

export default function BusinessDetailsForm({ data, updateData, onNext }: BusinessDetailsFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!data.name.trim()) {
      newErrors.name = "Business name is required"
    }

    if (!data.description.trim()) {
      newErrors.description = "Description is required"
    } else if (data.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters"
    }

    if (!data.website.trim()) {
      newErrors.website = "Website is required"
    } else if (!/^https?:\/\//.test(data.website)) {
      newErrors.website = "Website must start with http:// or https://"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      onNext()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-2">
          <Label htmlFor="name">Business Name</Label>
          <Input
            id="name"
            value={data.name}
            onChange={(e) => updateData({ name: e.target.value })}
            placeholder="Your business name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Business Description</Label>
          <Textarea
            id="description"
            value={data.description}
            onChange={(e) => updateData({ description: e.target.value })}
            placeholder="Describe your business and marketplace purpose"
            rows={4}
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            value={data.website}
            onChange={(e) => updateData({ website: e.target.value })}
            placeholder="https://yourbusiness.com"
          />
          {errors.website && <p className="text-red-500 text-sm">{errors.website}</p>}
        </div>

        <div className="space-y-2">
          <Label>Business Logo</Label>
          <div className="flex items-start gap-4">
            <div className="h-24 w-24 rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden">
              <img
                src={data.logo || "/placeholder.svg"}
                alt="Logo preview"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex-1">
              <Button type="button" variant="outline" className="mb-2">
                Upload Logo
              </Button>
              <p className="text-xs text-gray-500">
                Recommended size: 400x400px. Max size: 2MB. Supported formats: PNG, JPG, SVG
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div></div>
        <Button type="submit" className="bg-teal-600 hover:bg-teal-700">
          Next Step
        </Button>
      </CardFooter>
    </form>
  )
}
