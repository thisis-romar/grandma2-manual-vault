---
type: "section"
cssclasses:
  - "gma2-section"
section: "RDM"
slug: "key_rdm"
url: "https://help.malighting.com/grandMA2/en/help/key_rdm.html"
page_count: 11
tags:
  - "type/section"
pages:
  - "[[Pages/RDM/Turn RDM on]]"
  - "[[Pages/RDM/Match RDM devices]]"
  - "[[Pages/RDM/Auto Patch RDM Devices]]"
  - "[[Pages/RDM/Work with RDM parameters]]"
  - "[[Pages/RDM/Work with RDM sensors]]"
  - "[[Pages/RDM/Configure RDM notifications]]"
  - "[[Pages/RDM/Use the RDM sheet]]"
  - "[[Pages/RDM/Unmatch RDM devices]]"
  - "[[Pages/RDM/Splitters and Mergers that Support RDM]]"
  - "[[Pages/RDM/Turn RDM off]]"
  - "[[Pages/RDM/RDM specific keywords]]"
---

# RDM

> [!source]- Source
> [MA Lighting Help – RDM](https://help.malighting.com/grandMA2/en/help/key_rdm.html)

Version 3.9

# RDM

**Requirements:**  
A Remote Device Management (= RDM) directly connected to one of the devices of the following grandMA2 series:  
\- grandMA2 consoles  
\- MA onPC command wing  
\- MA onPC fader wing  
\- MA NPU  
​- MA 8Port Node, MA 8Port Node onPC  
​- MA 4Port Node, MA 4Port Node onPC, MA 4Port WM  
​- MA 2Port Node, MA 2Port Node onPC 2K, MA 2Port Node onPC 1K, MA 2Port WM

**Restriction:**  
RDM does not support the following devices of the grandMA1 series:  
\- MA 2Port Node  
\- MA 2Port Node PRO  
\- MA 2Port Node Flush-mounted  
\- MA NSP in 4Port Node Mode

RDM is a protocol that allows bi-directional communication between the grandMA2 and RDM-ready devices attached to it (= RDM-ready fixtures) over a standard DMX line. ANSI E1.20 - 2010 by PLASA specifies the RDM standard as an extension of the DMX512 protocol.

Manual settings, such as adjusting the DMX starting address, are no longer needed. This is especially useful for devices installed in a remote area.

RDM is integrated in DMX without influencing the connections. The RDM data is transmitted via the standard XLR-poles – new DMX cables are not required. RDM-ready devices and conventional DMX devices can be operated in one DMX line. The RDM protocol sends its own data packages in the DMX512 data feed and does not influence conventional devices.

Furthermore, RDM works simultaneously via Art-Net and MA-Net2. This allows configuration, status monitoring, and management of these devices.

RDM can provide the following uses, depending on the RDM device:

*   Identification of the connected devices
*   Addressing of devices controllable by DMX512
*   Status reporting of fixtures (alerts and warnings)
*   Configuration of fixtures by setting RDM parameters

RDM starts a discovery (= search) for the RDM device every six seconds. If an RDM device is offline, a timeout will be reported after three unsuccessful discoveries for RDM (= 18 seconds).

  

* * *

#### Sub topics

*   [[Pages/RDM/Turn RDM on]]
*   [[Pages/RDM/Match RDM devices]]
*   [[Pages/RDM/Auto Patch RDM Devices|Auto patch RDM devices]]
*   [[Pages/RDM/Work with RDM parameters]]
*   [[Pages/RDM/Work with RDM sensors]]
*   [[Pages/RDM/Configure RDM notifications]]
*   [[Pages/RDM/Use the RDM sheet]]
*   [[Pages/RDM/Unmatch RDM devices]]
*   [[Pages/RDM/Splitters and Mergers that Support RDM|Splitters and mergers that support RDM]]
*   [[Pages/RDM/Turn RDM off]]
*   [[Pages/RDM/RDM specific keywords]]

## Pages in This Section

- [[Pages/RDM/Turn RDM on]]
- [[Pages/RDM/Match RDM devices]]
- [[Pages/RDM/Auto Patch RDM Devices]]
- [[Pages/RDM/Work with RDM parameters]]
- [[Pages/RDM/Work with RDM sensors]]
- [[Pages/RDM/Configure RDM notifications]]
- [[Pages/RDM/Use the RDM sheet]]
- [[Pages/RDM/Unmatch RDM devices]]
- [[Pages/RDM/Splitters and Mergers that Support RDM]]
- [[Pages/RDM/Turn RDM off]]
- [[Pages/RDM/RDM specific keywords]]

Part of [[000 Map of Content]]
