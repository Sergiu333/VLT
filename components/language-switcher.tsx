import React from 'react';
import {useRouter} from "next/router";

const LanguageSwitcher = () => {
    const router = useRouter();
    const {locale} = router;

    const Footer = (data) => {
        const locale = data.target.value;
        router.push(router.pathname, router.asPath, {locale});
    };

    return (
        <div>
            {<select
                onChange={Footer}
                defaultValue={locale}
                className="p-3 md:p-0" name="lang" id="languages-list">
                <option value="en">English</option>
                <option value="ro">Romanian - Română</option>
            </select>}
        </div>
    );
};

export default LanguageSwitcher;
