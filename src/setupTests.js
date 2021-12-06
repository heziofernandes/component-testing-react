import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {configure} from '@testing-library/react'

configure({testIdAttribute: 'testid'})

export{render,screen,userEvent};