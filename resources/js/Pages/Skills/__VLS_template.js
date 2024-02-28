import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, submit, form } from './Create.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'Head', typeof __VLS_localComponents, "Head", "Head", "Head"> &
__VLS_WithComponent<'AuthenticatedLayout', typeof __VLS_localComponents, "AuthenticatedLayout", "AuthenticatedLayout", "AuthenticatedLayout"> &
__VLS_WithComponent<'InputLabel', typeof __VLS_localComponents, "InputLabel", "InputLabel", "InputLabel"> &
__VLS_WithComponent<'TextInput', typeof __VLS_localComponents, "TextInput", "TextInput", "TextInput"> &
__VLS_WithComponent<'InputError', typeof __VLS_localComponents, "InputError", "InputError", "InputError"> &
__VLS_WithComponent<'Link', typeof __VLS_localComponents, "Link", "Link", "Link"> &
__VLS_WithComponent<'PrimaryButton', typeof __VLS_localComponents, "PrimaryButton", "PrimaryButton", "PrimaryButton">;
__VLS_components.Head;
// @ts-ignore
[Head,];
__VLS_components.AuthenticatedLayout; __VLS_components.AuthenticatedLayout;
// @ts-ignore
[AuthenticatedLayout, AuthenticatedLayout,];
__VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template;
__VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.form; __VLS_intrinsicElements.form;
__VLS_components.InputLabel; __VLS_components.InputLabel;
// @ts-ignore
[InputLabel, InputLabel,];
__VLS_components.TextInput; __VLS_components.TextInput;
// @ts-ignore
[TextInput, TextInput,];
__VLS_components.InputError; __VLS_components.InputError;
// @ts-ignore
[InputError, InputError,];
__VLS_components.Link; __VLS_components.Link;
// @ts-ignore
[Link, Link,];
__VLS_components.PrimaryButton; __VLS_components.PrimaryButton;
// @ts-ignore
[PrimaryButton, PrimaryButton,];
{
const __VLS_0 = ({} as 'Head' extends keyof typeof __VLS_ctx ? { 'Head': typeof __VLS_ctx.Head; } : typeof __VLS_resolvedLocalAndGlobalComponents).Head;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, title: ("New skill"), }));
({} as { Head: typeof __VLS_0; }).Head;
const __VLS_2 = __VLS_1({ ...{}, title: ("New skill"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, title: ("New skill"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
}
{
const __VLS_5 = ({} as 'AuthenticatedLayout' extends keyof typeof __VLS_ctx ? { 'AuthenticatedLayout': typeof __VLS_ctx.AuthenticatedLayout; } : typeof __VLS_resolvedLocalAndGlobalComponents).AuthenticatedLayout;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, }));
({} as { AuthenticatedLayout: typeof __VLS_5; }).AuthenticatedLayout;
({} as { AuthenticatedLayout: typeof __VLS_5; }).AuthenticatedLayout;
const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["template"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_8.slots!).header;
{
const __VLS_13 = __VLS_intrinsicElements["h2"];
const __VLS_14 = __VLS_elementAsFunctionalComponent(__VLS_13);
const __VLS_15 = __VLS_14({ ...{}, class: ("font-semibold text-xl text-gray-800 leading-tight"), }, ...__VLS_functionalComponentArgsRest(__VLS_14));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_13, typeof __VLS_15> & Record<string, unknown>) => void)({ ...{}, class: ("font-semibold text-xl text-gray-800 leading-tight"), });
const __VLS_16 = __VLS_pickFunctionalComponentCtx(__VLS_13, __VLS_15)!;
let __VLS_17!: __VLS_NormalizeEmits<typeof __VLS_16.emit>;
(__VLS_16.slots!).default;
}
}
}
{
const __VLS_18 = __VLS_intrinsicElements["template"];
const __VLS_19 = __VLS_elementAsFunctionalComponent(__VLS_18);
const __VLS_20 = __VLS_19({ ...{}, "<div": (true), class: ("py-12"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_18, typeof __VLS_20> & Record<string, unknown>) => void)({ ...{}, "<div": (true), class: ("py-12"), });
{
const __VLS_21 = __VLS_intrinsicElements["div"];
const __VLS_22 = __VLS_elementAsFunctionalComponent(__VLS_21);
const __VLS_23 = __VLS_22({ ...{}, class: ("max-w-7xl mx-auto sm:px-6 lg:px-8"), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_21, typeof __VLS_23> & Record<string, unknown>) => void)({ ...{}, class: ("max-w-7xl mx-auto sm:px-6 lg:px-8"), });
const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23)!;
let __VLS_25!: __VLS_NormalizeEmits<typeof __VLS_24.emit>;
{
const __VLS_26 = __VLS_intrinsicElements["div"];
const __VLS_27 = __VLS_elementAsFunctionalComponent(__VLS_26);
const __VLS_28 = __VLS_27({ ...{}, class: ("flex justify-center  m-2 p-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_26, typeof __VLS_28> & Record<string, unknown>) => void)({ ...{}, class: ("flex justify-center  m-2 p-2"), });
const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28)!;
let __VLS_30!: __VLS_NormalizeEmits<typeof __VLS_29.emit>;
{
const __VLS_31 = __VLS_intrinsicElements["form"];
const __VLS_32 = __VLS_elementAsFunctionalComponent(__VLS_31);
const __VLS_33 = __VLS_32({ ...{ onSubmit: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_32));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_33> & Record<string, unknown>) => void)({ ...{ onSubmit: {} as any, }, });
const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33)!;
let __VLS_35!: __VLS_NormalizeEmits<typeof __VLS_34.emit>;
let __VLS_36 = { 'submit': __VLS_pickEvent(__VLS_35['submit'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_32, typeof __VLS_33>).onSubmit) };
__VLS_36 = { submit: (__VLS_ctx.submit) };
{
const __VLS_37 = __VLS_intrinsicElements["div"];
const __VLS_38 = __VLS_elementAsFunctionalComponent(__VLS_37);
const __VLS_39 = __VLS_38({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_38));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_37, typeof __VLS_39> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39)!;
let __VLS_41!: __VLS_NormalizeEmits<typeof __VLS_40.emit>;
{
const __VLS_42 = ({} as 'InputLabel' extends keyof typeof __VLS_ctx ? { 'InputLabel': typeof __VLS_ctx.InputLabel; } : typeof __VLS_resolvedLocalAndGlobalComponents).InputLabel;
const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ ...{}, for: ("name"), value: ("Name"), }));
({} as { InputLabel: typeof __VLS_42; }).InputLabel;
const __VLS_44 = __VLS_43({ ...{}, for: ("name"), value: ("Name"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_42, typeof __VLS_44> & Record<string, unknown>) => void)({ ...{}, for: ("name"), value: ("Name"), });
const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44)!;
let __VLS_46!: __VLS_NormalizeEmits<typeof __VLS_45.emit>;
}
{
const __VLS_47 = ({} as 'TextInput' extends keyof typeof __VLS_ctx ? { 'TextInput': typeof __VLS_ctx.TextInput; } : typeof __VLS_resolvedLocalAndGlobalComponents).TextInput;
const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({ ...{}, id: ("name"), type: ("text"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.name)), required: (true), autofocus: (true), autocomplete: ("name"), }));
({} as { TextInput: typeof __VLS_47; }).TextInput;
const __VLS_49 = __VLS_48({ ...{}, id: ("name"), type: ("text"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.name)), required: (true), autofocus: (true), autocomplete: ("name"), }, ...__VLS_functionalComponentArgsRest(__VLS_48));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_47, typeof __VLS_49> & Record<string, unknown>) => void)({ ...{}, id: ("name"), type: ("text"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.name)), required: (true), autofocus: (true), autocomplete: ("name"), });
const __VLS_50 = __VLS_pickFunctionalComponentCtx(__VLS_47, __VLS_49)!;
let __VLS_51!: __VLS_NormalizeEmits<typeof __VLS_50.emit>;
}
{
const __VLS_52 = ({} as 'InputError' extends keyof typeof __VLS_ctx ? { 'InputError': typeof __VLS_ctx.InputError; } : typeof __VLS_resolvedLocalAndGlobalComponents).InputError;
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({ ...{}, class: ("mt-2"), message: ((__VLS_ctx.form.errors.name)), }));
({} as { InputError: typeof __VLS_52; }).InputError;
const __VLS_54 = __VLS_53({ ...{}, class: ("mt-2"), message: ((__VLS_ctx.form.errors.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_53));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_52, typeof __VLS_54> & Record<string, unknown>) => void)({ ...{}, class: ("mt-2"), message: ((__VLS_ctx.form.errors.name)), });
const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54)!;
let __VLS_56!: __VLS_NormalizeEmits<typeof __VLS_55.emit>;
}
(__VLS_40.slots!).default;
}
{
const __VLS_57 = __VLS_intrinsicElements["div"];
const __VLS_58 = __VLS_elementAsFunctionalComponent(__VLS_57);
const __VLS_59 = __VLS_58({ ...{}, class: ("mt-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_58));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_57, typeof __VLS_59> & Record<string, unknown>) => void)({ ...{}, class: ("mt-4"), });
const __VLS_60 = __VLS_pickFunctionalComponentCtx(__VLS_57, __VLS_59)!;
let __VLS_61!: __VLS_NormalizeEmits<typeof __VLS_60.emit>;
{
const __VLS_62 = ({} as 'InputLabel' extends keyof typeof __VLS_ctx ? { 'InputLabel': typeof __VLS_ctx.InputLabel; } : typeof __VLS_resolvedLocalAndGlobalComponents).InputLabel;
const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ ...{}, for: ("image"), value: ("Image"), }));
({} as { InputLabel: typeof __VLS_62; }).InputLabel;
const __VLS_64 = __VLS_63({ ...{}, for: ("image"), value: ("Image"), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_62, typeof __VLS_64> & Record<string, unknown>) => void)({ ...{}, for: ("image"), value: ("Image"), });
const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64)!;
let __VLS_66!: __VLS_NormalizeEmits<typeof __VLS_65.emit>;
}
{
const __VLS_67 = ({} as 'TextInput' extends keyof typeof __VLS_ctx ? { 'TextInput': typeof __VLS_ctx.TextInput; } : typeof __VLS_resolvedLocalAndGlobalComponents).TextInput;
const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({ ...{ onInput: {} as any, }, id: ("image"), type: ("file"), class: ("mt-1 block w-full"), }));
({} as { TextInput: typeof __VLS_67; }).TextInput;
const __VLS_69 = __VLS_68({ ...{ onInput: {} as any, }, id: ("image"), type: ("file"), class: ("mt-1 block w-full"), }, ...__VLS_functionalComponentArgsRest(__VLS_68));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_67, typeof __VLS_69> & Record<string, unknown>) => void)({ ...{ onInput: {} as any, }, id: ("image"), type: ("file"), class: ("mt-1 block w-full"), });
const __VLS_70 = __VLS_pickFunctionalComponentCtx(__VLS_67, __VLS_69)!;
let __VLS_71!: __VLS_NormalizeEmits<typeof __VLS_70.emit>;
let __VLS_72 = { 'input': __VLS_pickEvent(__VLS_71['input'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_68, typeof __VLS_69>).onInput) };
__VLS_72 = {
input: $event => {
__VLS_ctx.form.image = $event.target.files[0];
// @ts-ignore
[submit, form, form, form, form, form, form, form,];
}
};
}
{
const __VLS_73 = ({} as 'InputError' extends keyof typeof __VLS_ctx ? { 'InputError': typeof __VLS_ctx.InputError; } : typeof __VLS_resolvedLocalAndGlobalComponents).InputError;
const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({ ...{}, class: ("mt-2"), message: ((__VLS_ctx.form.errors.image)), }));
({} as { InputError: typeof __VLS_73; }).InputError;
const __VLS_75 = __VLS_74({ ...{}, class: ("mt-2"), message: ((__VLS_ctx.form.errors.image)), }, ...__VLS_functionalComponentArgsRest(__VLS_74));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_73, typeof __VLS_75> & Record<string, unknown>) => void)({ ...{}, class: ("mt-2"), message: ((__VLS_ctx.form.errors.image)), });
const __VLS_76 = __VLS_pickFunctionalComponentCtx(__VLS_73, __VLS_75)!;
let __VLS_77!: __VLS_NormalizeEmits<typeof __VLS_76.emit>;
}
(__VLS_60.slots!).default;
}
{
const __VLS_78 = __VLS_intrinsicElements["div"];
const __VLS_79 = __VLS_elementAsFunctionalComponent(__VLS_78);
const __VLS_80 = __VLS_79({ ...{}, class: ("flex items-center justify-end mt-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_78, typeof __VLS_80> & Record<string, unknown>) => void)({ ...{}, class: ("flex items-center justify-end mt-4"), });
const __VLS_81 = __VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80)!;
let __VLS_82!: __VLS_NormalizeEmits<typeof __VLS_81.emit>;
{
const __VLS_83 = ({} as 'Link' extends keyof typeof __VLS_ctx ? { 'Link': typeof __VLS_ctx.Link; } : typeof __VLS_resolvedLocalAndGlobalComponents).Link;
const __VLS_84 = __VLS_asFunctionalComponent(__VLS_83, new __VLS_83({ ...{}, href: ((__VLS_ctx.route('login'))), class: ("underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"), }));
({} as { Link: typeof __VLS_83; }).Link;
({} as { Link: typeof __VLS_83; }).Link;
const __VLS_85 = __VLS_84({ ...{}, href: ((__VLS_ctx.route('login'))), class: ("underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_84));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_83, typeof __VLS_85> & Record<string, unknown>) => void)({ ...{}, href: ((__VLS_ctx.route('login'))), class: ("underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"), });
const __VLS_86 = __VLS_pickFunctionalComponentCtx(__VLS_83, __VLS_85)!;
let __VLS_87!: __VLS_NormalizeEmits<typeof __VLS_86.emit>;
(__VLS_86.slots!).default;
}
{
const __VLS_88 = ({} as 'PrimaryButton' extends keyof typeof __VLS_ctx ? { 'PrimaryButton': typeof __VLS_ctx.PrimaryButton; } : typeof __VLS_resolvedLocalAndGlobalComponents).PrimaryButton;
const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({ ...{}, class: ("ms-4"), disabled: ((__VLS_ctx.form.processing)), }));
({} as { PrimaryButton: typeof __VLS_88; }).PrimaryButton;
({} as { PrimaryButton: typeof __VLS_88; }).PrimaryButton;
const __VLS_90 = __VLS_89({ ...{}, class: ("ms-4"), disabled: ((__VLS_ctx.form.processing)), }, ...__VLS_functionalComponentArgsRest(__VLS_89));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_88, typeof __VLS_90> & Record<string, unknown>) => void)({ ...{}, class: ("ms-4"), disabled: ((__VLS_ctx.form.processing)), });
const __VLS_91 = __VLS_pickFunctionalComponentCtx(__VLS_88, __VLS_90)!;
let __VLS_92!: __VLS_NormalizeEmits<typeof __VLS_91.emit>;
({ 'opacity-25': __VLS_ctx.form.processing });
(__VLS_91.slots!).default;
}
(__VLS_81.slots!).default;
}
(__VLS_34.slots!).default;
}
(__VLS_29.slots!).default;
}
(__VLS_24.slots!).default;
}
(__VLS_8.slots!).default;
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[form, form, form, route, route, route, form, form, form, form,];
return __VLS_slots;
}
