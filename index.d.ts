import * as React from 'react';

export interface BusyIndicatorProperties {
  color: string;
  overlayColor: string;
  overlayHeight: number;
  overlayWidth: number;
  size: 'large' | 'small';
  startVisible: boolean;
  text: string;
  textColor: string;
  textFontSize: number;
  textNumberOfLines: number;
}

export interface BusyIndicatorState {
  isVisible: boolean;
}

export class BusyIndicator extends React.Component<BusyIndicatorProperties | {}, BusyIndicatorState> {
  changeLoadingEffect(state: BusyIndicatorState): void;
}

declare namespace LoaderHandler {
  export function hideLoader(): void;

  export function showLoader(title: string): void;
}

export default BusyIndicator;
