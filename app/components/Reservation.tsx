"use client"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { CalendarFold } from "lucide-react"

const PRICE_PER_NIGHT = 130

export const Reservation = () => {
  const [startDate, setStartDate] = useState<Date | undefined>()
  const [endDate, setEndDate] = useState<Date | undefined>()
  const [isSubmitted, setIsSubmitted] = useState(false)

  // 📅 Fonction pour ajouter 1 jour à une date
  const addOneDay = (date: Date) => {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + 1)
    return newDate
  }

  const handleStartDateSelect = (date: Date | undefined) => {
    if (!date) return
    setStartDate(date)

    // Si aucune date de fin ou si la date de fin est avant le nouveau début, on définit automatiquement le lendemain
    if (!endDate || (endDate && date >= endDate)) {
      setEndDate(addOneDay(date))
    }
  }

  const handleEndDateSelect = (date: Date | undefined) => {
    if (startDate && date && date >= startDate) {
      setEndDate(date)
    }
  }

  const calculateNights = () => {
    if (startDate && endDate) {
      const timeDiff = endDate.getTime() - startDate.getTime()
      return Math.ceil(timeDiff / (1000 * 3600 * 24))
    }
    return 0
  }

  const totalNights = calculateNights()
  const totalPrice = totalNights * PRICE_PER_NIGHT

  const handleReservation = () => {
    setIsSubmitted(true)
  }

  return (
    <div className="max-w-[1200px] mx-auto p-6 bg-white rounded-xl space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">Réserver votre séjour</h2>

      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <CalendarFold className="text-gray-500 h-5 w-5" />
          <p className="font-medium text-lg text-gray-700">Sélectionnez vos dates</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl mx-auto">
          {/* 📅 Calendrier de début */}
          <div>
            <p className="text-sm font-medium text-gray-600">Date de début</p>
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={handleStartDateSelect}
              disabled={{ before: new Date() }} // 🔒 Empêche les dates passées
              className="rounded-md border shadow-sm mt-2"
            />
          </div>

          {/* 📅 Calendrier de fin */}
          {startDate && (
            <div>
              <p className="text-sm font-medium text-gray-600">Date de fin</p>
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={handleEndDateSelect}
                disabled={{ before: startDate }} // 🔒 Empêche les dates avant le début
                className="rounded-md border shadow-sm mt-2"
              />
            </div>
          )}
        </div>

        {/* 🧾 Résumé */}
        {endDate && (
          <div className="p-4 bg-gray-200 border-l-4 text-center border-blue-400 text-blue-700 rounded-lg">
            <p className="text-lg font-semibold text-gray-700">
              {totalNights} nombe de nuits{totalNights > 1 ? "s" : ""} × {PRICE_PER_NIGHT}€ ={" "}
              <span className="text-green-600">{totalPrice}€</span>
            </p>
            <Button onClick={handleReservation} className="mt-4 hover:bg-yellow-600">
              Réserver maintenant
            </Button>
          </div>
        )}

        {isSubmitted && (
          <p className="text-center text-green-700 font-medium mt-4">
            ✅ Réservation enregistrée avec succès !
          </p>
        )}
      </div>
    </div>
  )
}

export default Reservation
