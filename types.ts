import React from 'react';

export interface ServiceLink {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface ServiceItem {
  category: string;
  items: string[];
}

export interface Location {
  name: string;
  address: string;
  email: string;
  phone: string;
  whatsapp: string;
}