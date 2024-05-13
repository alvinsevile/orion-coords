RegisterCommand("coords", function()
    local playerCoords = GetEntityCoords(PlayerPedId())
    local playerHeading = GetEntityHeading(PlayerPedId())
    local x = string.sub(playerCoords.x, 0, 8) 
    local y = string.sub(playerCoords.y, 0, 8)
    local z = string.sub(playerCoords.z, 0, 6)
    local data = {
        xyz = 'x = ' .. x .. ', y = ' .. y .. ', z = ' .. z,
        vector3 = 'vector3(' .. x .. ', ' .. y .. ', ' .. z .. ')',
        vector4 = 'vector4(' .. x .. ', ' .. y .. ', ' .. z .. ', ' .. math.round(playerHeading) ..')',
        heading = math.round(playerHeading)
    }
    SendNUIMessage({ type = 'show', infoData = data })
    SetNuiFocus(true, true)
end)

RegisterNUICallback("close", function(data)
    SetNuiFocus(false, false)
end)

--[[
    Citizen.CreateThread(function()
    while display do
        Citizen.Wait(0)
        DisableControlAction(0, 1, display)
        DisableControlAction(0, 2, display)
        DisableControlAction(0, 142, display)
        DisableControlAction(0, 18, display)
        DisableControlAction(0, 322, display)
        DisableControlAction(0, 106, display)
    end
end)
]]