import React from 'react';
import UserLocation from '@/components/UserLocation';
import DataVisualization from '@/components/DataVisualization';

export default function Dashboard() {
  return (
    <main>
      <div class="my-8">
        <UserLocation />
      </div>
      <div class="flex justify-center align-center">
	<div class="">
	  <DataVisualization />
	</div>
      </div>
    </main>
  );
}
