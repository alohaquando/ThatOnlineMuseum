<script lang="ts">
    import ListItem from '$lib/components/item/ListItem.svelte';
    import { modalData, previousState } from '$lib/stores/modal';
    import { resetDialog, toggleDialog } from '$lib/stores/dialog';
    import Dialog from '$lib/components/pop-up/Dialog.svelte';
	import { authHandlers } from '$lib/stores/store';

    modalData.set({
        modalPage: true,
        href: '/account',
        title: 'Account setting',
        exit: true,
        button: undefined,
        buttonFunction: function() {
        },
        animation: ''
    });

    let button1 = {
        option: 'Cancel',
        type: '',
        function: () => {
            resetDialog();
        }
    };
    let button2 = {
        option: 'Log out',
        type: 'filled',
        function: function() {
            authHandlers.logout()
            window.location.href = '/'
        }
    };
</script>

<div class=" flex flex-col justify-center items-center">
    <ListItem
            bottomDivider={false}
            class="w-full"
            clickable={true}
            href="update/name"
            icon="faChevronRight"
            text="Update name"
            topDivider={false}
    />
    <ListItem
            bottomDivider={false}
            class="w-full"
            clickable={true}
            href="update/email"
            icon="faChevronRight"
            text="Update email"
            topDivider={false}
    />
    <ListItem
            bottomDivider={false}
            class="w-full"
            clickable={true}
            href="update/password"
            icon="faChevronRight"
            text="Update password"
            topDivider={false}
    />
    <ListItem
            bottomDivider={false}
            class="w-full"
            clickable={true}
            design="destructive"
            on:click={toggleDialog}
            text="Log out"
            topDivider={false}
    />
</div>
<Dialog button1={button1} button2={button2} text="Are you sure you want to log out?" title="Log out"></Dialog>