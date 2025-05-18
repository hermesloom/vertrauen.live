"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface ApplicationFormData {
  // Personal section
  firstName: string;
  lastName: string;
  age: string;
  location: string;
  email: string;
  canVideoCall: boolean;

  // About section
  currentLife: string;
  whyInterested: string;
  goodConversation: string;
  values: string;
  nogo: string;

  // Commitment section
  monthlyConversation: string;
  consentCommitment: string;
  positiveExperience: string;
  additionalInfo: string;
  preferredAddress: string;
  customAddress: string;
}

export default function ApplicationForm() {
  const [activeTab, setActiveTab] = useState<string>("personal");
  const [formData, setFormData] = useState<ApplicationFormData>({
    // Personal section
    firstName: "",
    lastName: "",
    age: "",
    location: "",
    email: "",
    canVideoCall: false,

    // About section
    currentLife: "",
    whyInterested: "",
    goodConversation: "",
    values: "",
    nogo: "",

    // Commitment section
    monthlyConversation: "yes",
    consentCommitment: "yes",
    positiveExperience: "yes",
    additionalInfo: "",
    preferredAddress: "du",
    customAddress: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleRadioChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [id]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailBody = `
Neue Bewerbung für Vertrauen:

PERSÖNLICHE INFORMATIONEN:
Vorname: ${formData.firstName}
Nachname: ${formData.lastName}
Alter: ${formData.age}
Wohnort: ${formData.location}
E-Mail: ${formData.email}
Kann Videoanrufe durchführen: ${formData.canVideoCall ? "Ja" : "Nein"}

ÜBER DIE PERSON:
Was bewegt dich gerade in deinem Leben?
${formData.currentLife}

Warum interessiert dich dieses Netzwerk?
${formData.whyInterested}

Was bedeutet für dich ein gutes Gespräch?
${formData.goodConversation}

Welche Werte sind dir in zwischenmenschlichen Beziehungen besonders wichtig?
${formData.values}

Was sind für dich absolute No-Gos in einer Begegnung?
${formData.nogo}

VERPFLICHTUNG:
Bereit für monatliches Gespräch: ${
      formData.monthlyConversation === "yes" ? "Ja" : "Nein"
    }
Verpflichtet sich zum Konsent-Prinzip: ${
      formData.consentCommitment === "yes" ? "Ja" : "Nein"
    }
Verpflichtet sich zu positiven Begegnungen: ${
      formData.positiveExperience === "yes" ? "Ja" : "Nein"
    }

ZUSÄTZLICHE INFORMATIONEN:
${formData.additionalInfo}

BEVORZUGTE ANSPRACHE:
${
  formData.preferredAddress === "other"
    ? formData.customAddress
    : formData.preferredAddress
}
`;

    const mailtoUrl = `mailto:applications@vertrauen.live?subject=Neue Bewerbung: ${
      formData.firstName
    } ${formData.lastName}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Deine Bewerbung bei Vertrauen</CardTitle>
        <CardDescription>
          Bitte beantworte die folgenden Fragen mit Offenheit und Ehrlichkeit.
          Es gibt keine "richtigen" Antworten – nur echte.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Tabs
            value={activeTab}
            onValueChange={handleTabChange}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal">Persönliches</TabsTrigger>
              <TabsTrigger value="about">Über dich</TabsTrigger>
              <TabsTrigger value="commitment">Verpflichtung</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Vorname</Label>
                  <Input
                    id="firstName"
                    placeholder="Vorname"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nachname</Label>
                  <Input
                    id="lastName"
                    placeholder="Nachname"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Alter</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Alter"
                    value={formData.age}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Wohnort</Label>
                  <Input
                    id="location"
                    placeholder="Wohnort"
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-Mail-Adresse</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="E-Mail"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <Checkbox
                  id="canVideoCall"
                  checked={formData.canVideoCall}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("canVideoCall", checked === true)
                  }
                />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="canVideoCall"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Ich kann an Videogesprächen teilnehmen
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Für das Aufnahmegespräch benötigen wir eine stabile
                    Internetverbindung und eine Kamera.
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="button" onClick={() => handleTabChange("about")}>
                  Weiter
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="about" className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="currentLife">
                  Was bewegt dich gerade in deinem Leben?
                </Label>
                <Textarea
                  id="currentLife"
                  placeholder="Deine Antwort"
                  className="min-h-[100px]"
                  value={formData.currentLife}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whyInterested">
                  Warum interessiert dich dieses Netzwerk? Was suchst du hier –
                  und was möchtest du geben?
                </Label>
                <Textarea
                  id="whyInterested"
                  placeholder="Deine Antwort"
                  className="min-h-[100px]"
                  value={formData.whyInterested}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="goodConversation">
                  Was bedeutet für dich ein gutes Gespräch?
                </Label>
                <Textarea
                  id="goodConversation"
                  placeholder="Deine Antwort"
                  className="min-h-[100px]"
                  value={formData.goodConversation}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="values">
                  Welche Werte sind dir in zwischenmenschlichen Beziehungen
                  besonders wichtig?
                </Label>
                <Textarea
                  id="values"
                  placeholder="Deine Antwort"
                  className="min-h-[100px]"
                  value={formData.values}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nogo">
                  Was sind für dich absolute No-Gos in einer Begegnung?
                </Label>
                <Textarea
                  id="nogo"
                  placeholder="Deine Antwort"
                  className="min-h-[100px]"
                  value={formData.nogo}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => handleTabChange("personal")}
                >
                  Zurück
                </Button>
                <Button
                  type="button"
                  onClick={() => handleTabChange("commitment")}
                >
                  Weiter
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="commitment" className="space-y-6 mt-4">
              <div className="space-y-3">
                <Label className="text-base">
                  Bist du bereit, mindestens einmal im Monat ein Gespräch mit
                  einem anderen Mitglied oder einem Bewerber zu führen?
                </Label>
                <div className="space-y-2">
                  <RadioGroup
                    defaultValue="yes"
                    value={formData.monthlyConversation}
                    onValueChange={(value) =>
                      handleRadioChange("monthlyConversation", value)
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="commitment1-yes" />
                      <Label htmlFor="commitment1-yes" className="font-normal">
                        Ja
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="commitment1-no" />
                      <Label htmlFor="commitment1-no" className="font-normal">
                        Nein
                      </Label>
                    </div>
                  </RadioGroup>
                  <p className="text-xs text-muted-foreground">
                    Wenn nein, ist eine Mitgliedschaft aktuell nicht möglich.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-base">
                  Verpflichtest du dich, nur einem klar kommunizierten "Ja"
                  Folge zu leisten – und jedes "Vielleicht" oder Schweigen als
                  Nein zu verstehen?
                </Label>
                <RadioGroup
                  defaultValue="yes"
                  value={formData.consentCommitment}
                  onValueChange={(value) =>
                    handleRadioChange("consentCommitment", value)
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="commitment2-yes" />
                    <Label htmlFor="commitment2-yes" className="font-normal">
                      Ja
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="commitment2-no" />
                    <Label htmlFor="commitment2-no" className="font-normal">
                      Nein
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label className="text-base">
                  Verpflichtest du dich, alles dir Mögliche zu tun, damit jede
                  Begegnung für beide Beteiligten ein positiver Wendepunkt sein
                  kann?
                </Label>
                <RadioGroup
                  defaultValue="yes"
                  value={formData.positiveExperience}
                  onValueChange={(value) =>
                    handleRadioChange("positiveExperience", value)
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="commitment3-yes" />
                    <Label htmlFor="commitment3-yes" className="font-normal">
                      Ja
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="commitment3-no" />
                    <Label htmlFor="commitment3-no" className="font-normal">
                      Nein
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalInfo">
                  Gibt es noch etwas, das du uns über dich oder deine Motivation
                  mitteilen möchtest?
                </Label>
                <Textarea
                  id="additionalInfo"
                  placeholder="Deine Antwort"
                  className="min-h-[100px]"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-3">
                <Label className="text-base">
                  Wie sollen wir dich im Gespräch ansprechen?
                </Label>
                <RadioGroup
                  defaultValue="du"
                  value={formData.preferredAddress}
                  onValueChange={(value) =>
                    handleRadioChange("preferredAddress", value)
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="du" id="address-du" />
                    <Label htmlFor="address-du" className="font-normal">
                      Du
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sie" id="address-sie" />
                    <Label htmlFor="address-sie" className="font-normal">
                      Sie
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="address-other" />
                    <Label htmlFor="address-other" className="font-normal">
                      Anderes:
                    </Label>
                    <Input
                      className="w-40"
                      placeholder="Bitte angeben"
                      id="customAddress"
                      value={formData.customAddress}
                      onChange={handleInputChange}
                      disabled={formData.preferredAddress !== "other"}
                    />
                  </div>
                </RadioGroup>
              </div>

              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => handleTabChange("about")}
                >
                  Zurück
                </Button>
                <Button type="submit">Bewerbung absenden</Button>
              </div>
            </TabsContent>
          </Tabs>
        </form>
      </CardContent>
    </Card>
  );
}
