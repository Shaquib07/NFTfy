"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface TokenSetupFormProps {
  data: {
    tokenName: string
    unitName: string
    totalSupply: string
    tokenType: string
    decimals: string
  }
  updateData: (data: Partial<TokenSetupFormProps["data"]>) => void
  onNext: () => void
  onBack: () => void
}

export default function TokenSetupForm({ data, updateData, onNext, onBack }: TokenSetupFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!data.tokenName.trim()) {
      newErrors.tokenName = "Token name is required"
    }

    if (!data.unitName.trim()) {
      newErrors.unitName = "Unit name is required"
    } else if (data.unitName.length > 8) {
      newErrors.unitName = "Unit name must be 8 characters or less"
    }

    if (!data.totalSupply.trim()) {
      newErrors.totalSupply = "Total supply is required"
    } else if (isNaN(Number(data.totalSupply)) || Number(data.totalSupply) <= 0) {
      newErrors.totalSupply = "Total supply must be a positive number"
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
          <Label htmlFor="tokenName">Token Name</Label>
          <Input
            id="tokenName"
            value={data.tokenName}
            onChange={(e) => updateData({ tokenName: e.target.value })}
            placeholder="My Token"
          />
          {errors.tokenName && <p className="text-red-500 text-sm">{errors.tokenName}</p>}
          <p className="text-xs text-gray-500">The full name of your token (e.g. "My Awesome Token")</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="unitName">Unit Name</Label>
          <Input
            id="unitName"
            value={data.unitName}
            onChange={(e) => updateData({ unitName: e.target.value })}
            placeholder="TKN"
            maxLength={8}
          />
          {errors.unitName && <p className="text-red-500 text-sm">{errors.unitName}</p>}
          <p className="text-xs text-gray-500">Short ticker symbol, max 8 characters (e.g. "TKN")</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="totalSupply">Total Supply</Label>
          <Input
            id="totalSupply"
            value={data.totalSupply}
            onChange={(e) => updateData({ totalSupply: e.target.value })}
            placeholder="10000"
            type="number"
            min="1"
          />
          {errors.totalSupply && <p className="text-red-500 text-sm">{errors.totalSupply}</p>}
        </div>

        <div className="space-y-2">
          <Label>Token Type</Label>
          <RadioGroup
            value={data.tokenType}
            onValueChange={(value) => updateData({ tokenType: value })}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="fungible" id="fungible" />
              <Label htmlFor="fungible" className="font-normal">
                Fungible Token (ASA)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nft" id="nft" />
              <Label htmlFor="nft" className="font-normal">
                Non-Fungible Token (NFT)
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="decimals">Decimals</Label>
          <Select value={data.decimals} onValueChange={(value) => updateData({ decimals: value })}>
            <SelectTrigger id="decimals">
              <SelectValue placeholder="Select decimals" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">0 - No decimal places</SelectItem>
              <SelectItem value="2">2 - Two decimal places</SelectItem>
              <SelectItem value="6">6 - Six decimal places</SelectItem>
              <SelectItem value="8">8 - Eight decimal places</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-gray-500">Number of decimal places your token supports</p>
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
