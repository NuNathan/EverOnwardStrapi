import type { Schema, Struct } from '@strapi/strapi';

export interface AboutCtaCard extends Struct.ComponentSchema {
  collectionName: 'components_about_cta_cards';
  info: {
    description: 'A call-to-action card on the about page';
    displayName: 'CTA Card';
    icon: 'link';
  };
  attributes: {
    buttonLabel: Schema.Attribute.String & Schema.Attribute.Required;
    buttonLink: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactServiceOption extends Struct.ComponentSchema {
  collectionName: 'components_contact_service_options';
  info: {
    description: 'A service option in the contact form dropdown';
    displayName: 'Service Option';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FaqFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_faq_faq_items';
  info: {
    description: 'A question and answer pair';
    displayName: 'FAQ Item';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_home_service_cards';
  info: {
    description: 'A service card shown on the home page';
    displayName: 'Service Card';
    icon: 'apps';
  };
  attributes: {
    buttonLink: Schema.Attribute.String & Schema.Attribute.Required;
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface VirtualTrainingDetailItem extends Struct.ComponentSchema {
  collectionName: 'components_virtual_training_detail_items';
  info: {
    description: 'An accordion item on the virtual training page';
    displayName: 'Detail Item';
    icon: 'bulletList';
  };
  attributes: {
    summary: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface VirtualTrainingProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_virtual_training_process_steps';
  info: {
    description: 'A step in the how-it-works process';
    displayName: 'Process Step';
    icon: 'apps';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'about.cta-card': AboutCtaCard;
      'contact.service-option': ContactServiceOption;
      'faq.faq-item': FaqFaqItem;
      'home.service-card': HomeServiceCard;
      'virtual-training.detail-item': VirtualTrainingDetailItem;
      'virtual-training.process-step': VirtualTrainingProcessStep;
    }
  }
}
