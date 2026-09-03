import { useState } from "react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import plattegrond from "../../assets/plategrond/Plattegrond_handig.png"

const FloorPlan = () => {
  const [selectedBuilding, setSelectedBuilding] = useState("")
  const [selectedFloor, setSelectedFloor] = useState("")

  const buildings = [
    {
      value: "r31",
      label: "R31",
      floors: [
        {
          value: "begane-grond",
          label: "Begane grond",
        },
        {
          value: "verdieping-1",
          label: "Verdieping 1",
        },
        {
          value: "verdieping-2",
          label: "Verdieping 2",
        },
      ],
    },
    {
      value: "r26",
      label: "R26",
      floors: [
        {
          value: "begane-grond",
          label: "Begane grond",
        },
        {
          value: "verdieping-1",
          label: "Verdieping 1",
        },
      ],
    },
    {
      value: "r29",
      label: "R29",
      floors: [
        {
          value: "begane-grond",
          label: "Begane grond",
        },
      ],
    },
  ]

  const selectedBuildingData = buildings.find(
    (building) => building.value === selectedBuilding
  )

  const availableFloors = selectedBuildingData?.floors ?? []

  const handleBuildingChange = (value) => {
    setSelectedBuilding(value)
    setSelectedFloor("")
  }

  return (
    <div className="w-full h-full flex flex-col gap-6">
      <div className="w-full h-[320px] flex justify-center overflow-hidden rounded-2xl border-2 border-accent">
        <img
          src={plattegrond}
          alt="Plattegrond HAN"
          className="h-full object-contain"
        />
      </div>

      <Select
        value={selectedBuilding}
        onValueChange={handleBuildingChange}
      >
        <SelectTrigger className="w-full h-20 px-6 rounded-2xl border-2 border-accent text-base shadow-none">
          <SelectValue placeholder="Gebouw" />
        </SelectTrigger>

        <SelectContent>
          {buildings.map((building) => (
            <SelectItem
              key={building.value}
              value={building.value}
            >
              {building.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={selectedFloor}
        onValueChange={setSelectedFloor}
        disabled={!selectedBuilding}
      >
        <SelectTrigger className="w-full h-20 px-6 rounded-2xl border-2 border-accent text-base shadow-none">
          <SelectValue placeholder="Verdiepingen" />
        </SelectTrigger>

        <SelectContent>
          {availableFloors.map((floor) => (
            <SelectItem
              key={floor.value}
              value={floor.value}
            >
              {floor.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default FloorPlan
