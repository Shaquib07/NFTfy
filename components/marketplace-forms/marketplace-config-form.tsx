"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CardContent, CardFooter } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface MarketplaceConfigFormProps {
  data: {
    royaltyPercentage: string
    marketplaceTheme: string
    customDomain: string
    features: string[]
  }
  updateData: (data: Partial<MarketplaceConfigFormProps["data"]>) => void
  onNext: () => void
  onBack: () => void
}

export default function MarketplaceConfigForm({ data, updateData, onNext, onBack }: MarketplaceConfigFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!data.royaltyPercentage.trim()) {
      newErrors.royaltyPercentage = "Royalty percentage is required"
    } else if (
      isNaN(Number(data.royaltyPercentage)) ||
      Number(data.royaltyPercentage) < 0 ||
      Number(data.royaltyPercentage) > 15
    ) {
      newErrors.royaltyPercentage = "Royalty percentage must be between 0 and 15"
    }

    if (!data.marketplaceTheme) {
      newErrors.marketplaceTheme = "Please select a marketplace theme"
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

  const toggleFeature = (feature: string) => {
    const currentFeatures = [...data.features]
    if (currentFeatures.includes(feature)) {
      updateData({ features: currentFeatures.filter((f) => f !== feature) })
    } else {
      updateData({ features: [...currentFeatures, feature] })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-2">
          <Label htmlFor="royaltyPercentage">Creator Royalty Percentage</Label>
          <Input
            id="royaltyPercentage"
            value={data.royaltyPercentage}
            onChange={(e) => updateData({ royaltyPercentage: e.target.value })}
            placeholder="2.5"
            type="number"
            min="0"
            max="15"
            step="0.1"
          />
          {errors.royaltyPercentage && <p className="text-red-500 text-sm">{errors.royaltyPercentage}</p>}
          <p className="text-xs text-gray-500">Percentage of secondary sales that goes to the creator (0-15%)</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="marketplaceTheme">Marketplace Theme</Label>
          <Select value={data.marketplaceTheme} onValueChange={(value) => updateData({ marketplaceTheme: value })}>
            <SelectTrigger id="marketplaceTheme">
              <SelectValue placeholder="Select theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="modern">Modern - Clean and minimal</SelectItem>
              <SelectItem value="classic">Classic - Traditional gallery style</SelectItem>
              <SelectItem value="dark">Dark - Dark mode focused</SelectItem>
              <SelectItem value="colorful">Colorful - Vibrant and bold</SelectItem>
            </SelectContent>
          </Select>
          {errors.marketplaceTheme && <p className="text-red-500 text-sm">{errors.marketplaceTheme}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="customDomain">Custom Domain (Optional)</Label>
          <Input
            id="customDomain"
            value={data.customDomain}
            onChange={(e) => updateData({ customDomain: e.target.value })}
            placeholder="mymarketplace.com"
          />
          <p className="text-xs text-gray-500">Leave blank to use a free subdomain (yourname.nftbuilder.app)</p>
        </div>

        <div className="space-y-3">
          <Label>Marketplace Features</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="feature-buy"
                checked={data.features.includes("buy")}
                onCheckedChange={() => toggleFeature("buy")}
              />
              <Label htmlFor="feature-buy" className="font-normal">
                Buy Now
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="feature-sell"
                checked={data.features.includes("sell")}
                onCheckedChange={() => toggleFeature("sell")}
              />
              <Label htmlFor="feature-sell" className="font-normal">
                Sell
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="feature-auction"
                checked={data.features.includes("auction")}
                onCheckedChange={() => toggleFeature("auction")}
              />
              <Label htmlFor="feature-auction" className="font-normal">
                Auctions
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="feature-offer"
                checked={data.features.includes("offer")}
                onCheckedChange={() => toggleFeature("offer")}
              />
              <Label htmlFor="feature-offer" className="font-normal">
                Make Offers
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="feature-collection"
                checked={data.features.includes("collection")}
                onCheckedChange={() => toggleFeature("collection")}
              />
              <Label htmlFor="feature-collection" className="font-normal">
                Collections
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="feature-analytics"
                checked={data.features.includes("analytics")}
                onCheckedChange={() => toggleFeature("analytics")}
              />
              <Label htmlFor="feature-analytics" className="font-normal">
                Analytics
              </Label>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="submit" className="bg-teal-600 hover:bg-teal-700">
          Next Step
        </Button>
      </CardFooter>
    </form>
  )
}
