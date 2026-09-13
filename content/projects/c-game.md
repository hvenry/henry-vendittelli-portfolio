---
title: "C# Game"
bodyTitle: "Bear the Animal Tosser"
summary: "Arcade game developed in C# and Unity, featuring a unique animal stacking mechanic and 2D-pixel art."
technologies:
  - "C#"
  - "Unity"
  - "Git"
github: "https://github.com/hvenry/CISC-226-GAME"
youtube: "https://youtu.be/YPBpoDEXPhQ"
image: "bear_project.png"
order: 8
featured: 3
---

An arcade game where you play Bear, a zookeeper who recaptures escaped animals by stacking them on your head.

## The stacking mechanic

Animals stack based on weight, so every capture is a small LIFO puzzle: plan the pickup order, then throw them into the right pens against location, time, and weight constraints.

## Build notes

- Written in **C# with Unity**, using state machines for animal behavior and a physics-based collision system.
- Scoped as a minimal viable product around the one novel mechanic, validated with user feedback before layering on extras like power-ups.
- Original 2D pixel art throughout, with a cartoony tone and zoo maps from around the world.
