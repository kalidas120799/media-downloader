"use client";
import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation'
import { Tab, Tabs } from '@mui/material';

const MenuTabs = (props) => {
    const { from, tabs, defaultTab } = props;
    const router = useRouter();
    const param = useParams();

    const [value, setValue] = useState(defaultTab ? defaultTab : 0);

    useEffect(() => {
        const { id } = param;
        if (id) {
            const selectedTab = tabs.find((tab) => tab.label.toLowerCase() === id);
            if (selectedTab) setValue(selectedTab.value);
        }
    }, [param]);

    const handleTabChange = (tabId) => {
        const selectedTab = tabs.find((tab) => tab.value === tabId);
        if (selectedTab) router.push(`/${from}/${selectedTab.key}`);
    }

    return (
        <Tabs
            value={value}
            onChange={(_, tab) => handleTabChange(tab)}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
        >
            {
                tabs.map((tab) => <Tab label={tab.label} key={tab.value} />)
            }
        </Tabs>
    )
}

export default MenuTabs