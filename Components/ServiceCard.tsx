import { Card, Col, Text } from '@nextui-org/react';
import React from 'react';
import { gql } from '@apollo/client';
import client from '../apolloClient';
import { Experience } from '../types';
import styles from './Services.module.css';

interface ServiceCardProps {
  service: Experience;
}

export default function Card1({ service }: ServiceCardProps) {
  return (
    <div className={styles.exp}>

    <h3>
      {service.title}
    </h3>
    <h4>{service.description}</h4>
 
      <Card.Header className={styles.cards}>
        <Text className={styles.ctitle}>{service.title}</Text>
      </Card.Header>
      <Card.Image
        src={service.image.url}
        height={340}
        width="100%"
        alt="Card image background"
      /> 
 </div> 
  );
}
