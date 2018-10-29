import { Injectable } from '@angular/core';
import { IS_ELECTRON } from '../../app.constants';
import { checkKeyCombo } from '../util/check-key-combo';
import { ConfigService } from '../config/config.service';
import { Router } from '@angular/router';

// const IPC_REGISTER_GLOBAL_SHORTCUT_EVENT = 'REGISTER_GLOBAL_SHORTCUT';

@Injectable({
  providedIn: 'root'
})
export class ShortcutService {

  constructor(
    private _configService: ConfigService,
    private _router: Router,
  ) {
    //   // Register electron shortcut(s)
    //   if (IS_ELECTRON && this._configService.cfg.keyboard.globalShowHide) {
    //     window.ipcRenderer.send(IPC_REGISTER_GLOBAL_SHORTCUT_EVENT, $rootScope.r.keys.globalShowHide);
    //   }
  }

  handleKeyDown(ev: KeyboardEvent) {
    const cfg = this._configService.cfg;


    // if (checkKeyCombo(ev, cfg.keyboard.openProjectNotes)) {
    //   Dialogs('NOTES', undefined, true);
    // }
    // if (checkKeyCombo(ev, cfg.keyboard.openDistractionPanel)) {
    //   Dialogs('DISTRACTIONS', undefined, true);
    // }
    // if (checkKeyCombo(ev, cfg.keyboard.showHelp)) {
    //   Dialogs('HELP', {template: 'PAGE'}, true);
    // }
    //
    if (checkKeyCombo(ev, cfg.keyboard.goToDailyPlanner)) {
      this._router.navigate(['/daily-planner']);
    }
    if (checkKeyCombo(ev, cfg.keyboard.goToWorkView)) {
      this._router.navigate(['/work-view']);
    }
    if (checkKeyCombo(ev, cfg.keyboard.goToDailyAgenda)) {
      this._router.navigate(['/daily-agenda']);
    }
    if (checkKeyCombo(ev, cfg.keyboard.goToSettings)) {
      this._router.navigate(['/settings']);
    }
    if (checkKeyCombo(ev, cfg.keyboard.goToFocusMode)) {
      this._router.navigate(['/focus-view']);
    }

    // special hidden dev tools combo to use them for production
    if (IS_ELECTRON) {
      if (checkKeyCombo(ev, 'Ctrl+Shift+J')) {
        window.ipcRenderer.send('TOGGLE_DEV_TOOLS');
      }
    }
  }
}
