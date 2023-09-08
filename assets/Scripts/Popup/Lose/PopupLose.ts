import { _decorator, Component, director, Node } from 'cc';
import { PopupBase } from '../../../Services/PopupSystem/PopupBase';
import { PopupManager } from '../../Game/Manager/PopupManager';
import { PopupType } from '../../../Services/PopupSystem/PopupType';
const { ccclass, property } = _decorator;

@ccclass('PopupLose')
export class PopupLose extends PopupBase {
}

