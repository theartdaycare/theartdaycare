import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

export interface ClassInfo {
  age: string;
  name: string;
  desc: string;
}