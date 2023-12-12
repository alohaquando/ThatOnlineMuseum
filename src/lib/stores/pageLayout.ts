import { resetHeader } from '$lib/stores/header';
import { resetNavbar } from '$lib/stores/navbar';
import { modal, previousState, resetModal } from '$lib/stores/modal';
import { resetBackground } from '$lib/stores/background';
import { resetDialog } from '$lib/stores/dialog';

export const defaultLayout = () => {
	resetHeader();
	resetNavbar();
	resetModal();
	resetBackground();
	resetDialog();
};

let ModalState: boolean;
let PrevState: boolean;
modal.subscribe((value) => (ModalState = value.modalPage));
previousState.subscribe((value) => (PrevState = value));

export const stateCheck = () => {
	if (!PrevState && ModalState) {
		previousState.set(true);
		modal.update((modalData) => ({
			...modalData,
			animation: 'animate-flyUp',
			exit: true
		}));
	} else if (PrevState && ModalState) {
		modal.update((modalData) => ({
			...modalData,
			animation: '',
			exit: false
		}));
	} else if (PrevState && !ModalState) {
		previousState.set(false);
		modal.update((modalData) => ({
			...modalData,
			animation: 'animate-flyUpOut'
		}));
	}
};
