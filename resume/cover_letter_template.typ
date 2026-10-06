/// Cover letter template matching the "ember" RenderCV theme's palette and fonts.
/// Usage: pass in the input dictionary via `sys.inputs` (see scripts/compile_cover_letter.py).

#let body-color = rgb(35, 31, 32)
#let accent-color = rgb(155, 35, 25)
#let muted-color = rgb(140, 125, 118)

#let data = json(sys.inputs.at("data-path"))

#set document(title: data.name + " - Cover Letter", author: data.name)
#set page(
  paper: "us-letter",
  margin: (top: 1in, bottom: 1in, left: 1in, right: 1in),
  footer: context [
    #set text(size: 8pt, fill: muted-color, style: "italic")
    #align(center)[#data.name -- Cover Letter]
  ],
)
#set text(font: "Ubuntu", size: 10.5pt, fill: body-color, lang: "en")
#set par(justify: true, leading: 0.65em)

// Header: name + contact line, matching the resume header style.
#align(center)[
  #text(font: "Gentium Book Plus", size: 24pt, weight: "bold", fill: accent-color)[#data.name]
  #v(-0.1em)
  #text(size: 9pt, fill: muted-color)[
    #data.location #h(0.4em) · #h(0.4em) #link("mailto:" + data.email)[#data.email] #h(0.4em) · #h(0.4em) #link(data.portfolio)[Portfolio]
  ]
]

#v(1.2em)

#text(size: 10pt, fill: muted-color)[#data.date]

#v(0.8em)

#if "hiring-manager" in data and data.hiring-manager != none [
  #data.hiring-manager \
]
#data.company#if "company-location" in data and data.company-location != none [, #data.company-location]

#v(1.2em)

#text(weight: "bold", fill: accent-color)[Re: Application for #data.role-title]

#v(1em)

#data.salutation

#v(0.8em)

#for paragraph in data.body-paragraphs [
  #paragraph

  #v(0.6em)
]

#data.sign-off

#v(0.6em)

#data.name
