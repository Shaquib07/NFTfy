"use client"

import { Button } from "@/components/ui/button"
import { CardContent, CardFooter } from "@/components/ui/card"
import { Check, AlertCircle } from "lucide-react"

interface ReviewAndSubmitFormProps {
  formData: {
    businessDetails: {
      name: string
      description: string
      website: string
      logo: string
    }
    tokenSetup: {
      tokenName: string
      unitName: string
      totalSupply: string
      tokenType: string
      decimals: string
    }
    marketplaceConfig: {
      royaltyPercentage: string
      marketplaceTheme: string
      customDomain: string
      features: string[]
    }
  }
  onSubmit: () => void
  onBack: () => void
  isSubmitting: boolean
}

export default function ReviewAndSubmitForm({ formData, onSubmit, onBack, isSubmitting }: ReviewAndSubmitFormProps) {
  const { businessDetails, tokenSetup, marketplaceConfig } = formData

  const formatFeatures = (features: string[]) => {
    return features.map((f) => f.charAt(0).toUpperCase() + f.slice(1)).join(", ")
  }

  const getThemeName = (theme: string) => {
    const themes: Record<string, string> = {
      modern: "Modern - Clean and minimal",
      classic: "Classic - Traditional gallery style",
      dark: "Dark - Dark mode focused",
      colorful: "Colorful - Vibrant and bold",
    }
    return themes[theme] || theme
  }

  return (
    <div>
      <CardContent className="pt-6">
        <div className="rounded-lg border border-gray-200 overflow-hidden mb-6">
          <div className="bg-gray-50 p-4 border-b border-gray-200">
            <h3 className="font-medium text-lg">Business Details</h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Business Name</p>
                <p>{businessDetails.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Website</p>
                <p>{businessDetails.website}</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Description</p>
              <p className="text-sm mt-1">{businessDetails.description}</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-md overflow-hidden border border-gray-200">
                <img
                  src={businessDetails.logo || "/placeholder.svg"}
                  alt="Business logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="text-sm font-medium">Logo</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 overflow-hidden mb-6">
          <div className="bg-gray-50 p-4 border-b border-gray-200">
            <h3 className="font-medium text-lg">Token Setup</h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Token Name</p>
                <p>{tokenSetup.tokenName}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Unit Name</p>
                <p>{tokenSetup.unitName}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Total Supply</p>
                <p>{tokenSetup.totalSupply}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Token Type</p>
                <p className="capitalize">{tokenSetup.tokenType}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Decimals</p>
                <p>{tokenSetup.decimals}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 overflow-hidden mb-6">
          <div className="bg-gray-50 p-4 border-b border-gray-200">
            <h3 className="font-medium text-lg">Marketplace Configuration</h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Royalty Percentage</p>
                <p>{marketplaceConfig.royaltyPercentage}%</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Theme</p>
                <p>{getThemeName(marketplaceConfig.marketplaceTheme)}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Domain</p>
                <p>
                  {marketplaceConfig.customDomain ||
                    `${businessDetails.name.toLowerCase().replace(/\s+/g, "-")}.nftbuilder.app`}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Features</p>
                <p>{formatFeatures(marketplaceConfig.features)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 flex items-start space-x-3">
          <Check className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-teal-800">Ready to Submit</h4>
            <p className="text-sm text-teal-700 mt-1">
              Your NFT marketplace configuration is ready to be submitted for review. Once approved, your smart
              contracts will be deployed on the Algorand blockchain.
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start space-x-3 mt-4">
          <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-amber-800">Important Note</h4>
            <p className="text-sm text-amber-700 mt-1">
              This is a proof of concept. In a production environment, launching a marketplace would require Algorand
              transactions and would incur fees on the blockchain.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="button" onClick={onSubmit} className="bg-teal-600 hover:bg-teal-700" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Marketplace"}
        </Button>
      </CardFooter>
    </div>
  )
}
